<?php
/**
 * Created by PhpStorm.
 * User: Julia Dolhoff, Patrick Toschka
 * Location: Akademie der Wissenschaften und der Literatur | Mainz
 * Date: 16.02.18
 * Time: 10:51 AM
 */

/*
 * This script takes a csv-file from the google form export,
 * accumulates the answers and puts the
 * questions and the accumulated answers in an output text file.
 *
 * Restrictions:
 * - Can only accumulate answers that contain exactly the same string (NOT WORKING: Person 1: "Wissenschaftlicher Mitarbeiter" ; Person 2: "wissenschaftlicher Mitarbeiter ; Person 3: "WiMi")
 * - Does not work with multiple answers from each person (NOT WORKING: Person 1: "Java, Python" ; Person 2: "Java, Python, C#")
 */


############### FUNCTIONS FOR RAW #################

//load text file
function loadTxtFile($file)
{
    $justText = file($file);
    return $justText;
}

// find and replace chars for correct output for raw
function regex($data)
{
    //creates file and/or resets it
    $file = fopen("output_for_raw.csv", "w");
    fputs($file, "");
    fclose($file);

    foreach ($data as $singleData) {
        // replace , delimeter with tab
        $tabDelimeter = str_replace('","', "	", $singleData);
        // remove all "
        $newData = str_replace('"', "", $tabDelimeter);

        // write in csv file
        $file = fopen("output_for_raw.csv", "a");
        fputs($file, $newData);
        fclose($file);
    }
}

############### FUNCTIONS FOR CHARTIST ###############

//loadFile
//$file = path to the import csv file
function loadFile($file)
{
    $csv = array();
    //reads all the data from the csv
    $csv_data = file($file);

    //creates an array with the csv data
    foreach ($csv_data as $key => $value) {
        $csv[$key] = str_getcsv($value, ',');
    }
    return $csv;
}

//arrangeCSVData
//$data = contains full csv data
function arrangeCSVData($data)
{
    //saves only the questions from the given data
    $questionArray = $data[0];

    //saves only the answers from different persons from the given data
    $personArray = array_slice($data, 1);

    $answerArray = array();

    //for each person
    foreach ($personArray as $number => $answer) {
        //for each answer of each person
        foreach ($answer as $iteration => $singleAnswer) {
            //sort all answers for one specific question from each Person in one Array
            $answerArray[$iteration][$number] = $singleAnswer;
        }
    }

    //for each question (and its answers)
    foreach ($questionArray as $iteration => $singleQuestion) {
        //make a new array, the question is the key value, the answers are the values
        $dataArray[$singleQuestion] = $answerArray[$iteration];
    }
    return $dataArray;
}

//countCSVValues
//$data = contains questions + all answers of each question
function countCSVValues($data)
{
    $countedArray = array();

    //for each question
    foreach ($data as $iteration => $singleData) {

        //function to accumulate different types of answers
        $dataArray = array_count_values($singleData);
        $countedArray[$iteration] = $dataArray;
    }
    return $countedArray;
}

//writeFile
//$data = contains questions with accumulated answers
function writeFile($data)
{
    //creates file and/or resets it
    $file = fopen("listed_results.txt", "w");
    fputs($file, "");
    fclose($file);

    //for each question
    foreach ($data as $question => $answer) {
        //write "Question: " and the question and "Answers: "
        $file = fopen("listed_results.txt", "a");
        fputs($file, "Question: " . $question . "\n" . "Answers:" . "\n");

        //for each answer
        foreach ($answer as $label => $countedAnswers) {

            //if no answer given set answer to "NO_ANSWER_GIVEN"
            if ($label == "") {
                $label = "NO_ANSWER_GIVEN";
            }

            //write accumulated answers and type of answer to file
            $file = fopen("listed_results.txt", "a");
            fputs($file, $countedAnswers . " | " . $label . "\n");
            fclose($file);

        }
        //put two br after every set of question + answer
        $file = fopen("listed_results.txt", "a");
        fputs($file, "\n\n");

    }
}


############### WORKFLOW ###############

/*
 * Loads file from local directory
 * Edit the filename to import other csv files
 * loads the CSV File in an Array
 */
$file = loadFile("umfrage_ergebnisse.csv");

//transforms the array, so that all answers to one question are in one array
$answer = arrangeCSVData($file);

//Converts the array by counting similar (atm: exactly the same) answers
$counted = countCSVValues($answer);

/*
 * writes calculated Data in the "listed_results.txt" file in the form
 * Question: ###Question###
 * Answers:
 * ###number of accurances### | ###answer text###
 */
writeFile($counted);


$file = loadTxtFile("umfrage_ergebnisse.csv");
//write csv file with correct input for raw
$meinRegex = regex($file);

