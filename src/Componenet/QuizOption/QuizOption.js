
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({option,correctAnswer}) => {
    function check(option){
    //    console.log(option);
       if(option===correctAnswer){
        // console.log('True')
        toast("Correct Answer!")
       }
       else {
        toast("Wrong Answer!")
       }
    }
    
    
    return (
        <div className='p-1'>
            
            <div class="form-check">
            <input onClick={()=>check(option)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
            <p>{option}</p>
            
            </label>
            <ToastContainer />
         </div>
       
        
        </div>
    );
};

export default QuizOption;