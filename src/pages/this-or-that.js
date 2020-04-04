import React,{useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { QUESTION } from '../utils/constant'

const IndexPage = () => {
  const [Data,setData] = useState(QUESTION)
  const toggleChoice = (idx,no_choice) => {
    let temp = [...Data]
    temp[idx][no_choice].val = !temp[idx][no_choice].val
    if(temp[idx][no_choice].is_first_time){
      temp[idx][no_choice].is_first_time = !temp[idx][no_choice].is_first_time
    }
    setData([...temp])
  }
  return (
    <Layout>
      <SEO title="This or that" />
      <div className="board">
        <h1 className="board__title">This or That !</h1>
        <h2 className="board__sub-title">Versinya IF-K03</h2>
        <div className="board__main">
          {
            Data.map((el,number) => 
              <div className="board__choice-group" key={`choice-group-${number}`}>
                {
                  el.map((v,idx) =>
                    <p
                      onClick={()=>toggleChoice(number,idx)} 
                      className="board__choice" 
                      key={`choice-${idx}-choice-group-${number}`}> {v.Q}                  
                     { 
                      v.val?
                        <span className="checklist"> <FontAwesomeIcon icon={faCheck}/> </span>
                        :''
                     }
                    </p>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
