import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator,Image, ScrollView,Modal, Animated, StatusBar} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { set } from 'react-native-reanimated';


export default function quizScreen({ route, navigation }) {
    const [products, setProducts] = useState([]);
    const [questions, setQuestions] = useState([[]]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)


    useEffect(() =>{
        getallQuestions();
        return()=>{

        }
    },[]);

    const getallQuestions=()=>{
        let{products}= route.params;
        setProducts(products);
        var questions = products.guided_reading_questions;
        setQuestions(questions);
    }

    //console.log("Defined")
    //console.log("Answer question[0] kbkjbkbkjbk")
    //console.log(questions[0])
    
    
    //console.log(products.name)
    //console.log(products.id)
    
    

    //checking if questions list exists
    /*
    if (products.guided_reading_questions){
        var questions = products.guided_reading_questions
    }else{
        var questions = [["error"]]
    }
    */
    

    //console.log("New Questions List\n")
    //console.log(questions)
    //console.log(questions[0].question)
    //console.log(questions.length)
    //console.log(questions[0].answer_options.length)

    
    //to get a list of answer choices
    function getQuestionsList(element_){
        const question_list=[]
        for (let i = 0; i < element_.length; i++) {
            question_list.push(element_[i].answer);
          }
        return(
            question_list
        )
    }
   //console.log(getQuestionsList(questions[0].answer_options))
    

    //to get the correct answer
    function getCorrectanswer(elem_){
        const correct_answer=""
        for (let i = 0; i < elem_.length; i++) {
            if(elem_[i].correct===true){
                correct_answer = elem_[i].answer
            }
          }
        return(
            correct_answer
        )
    }

    //console.log(getCorrectanswer(questions[0].answer_options))


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: '1%' }}>
            <Text>Quiz Screen</Text>
            <Text>{products.name}</Text>
            <Text>{products.id}</Text>
            <View style= {{borderWidth: 1, borderRadius: 10}}>
                <Text>Number 1</Text>
                <Text>{"Question"}</Text>
            </View>
        </View>
    );
}
//comment