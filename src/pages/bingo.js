import React,{useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { BINGO_CHOICE } from '../utils/constant'

const IndexPage = () => {
  const [Data,setData] = useState(BINGO_CHOICE)
  const toggleChoice = (idx) => {
    let temp = [...Data]
    temp[idx].val = !temp[idx].val
    setData([...temp])
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="board">
        <h1 className="board__title">Bingo !</h1>
        <h2 className="board__sub-title">Versinya IF-K03</h2>
        <div className="board__main--bingo">
          {
            BINGO_CHOICE.map((el,index) =>
            <div className="board__choice-container--bingo"
            key={`bingo-choice-${index}`}>
              <p 
              className="board__choice--bingo"
              onClick={()=>toggleChoice(index)}
              >
              {el.c}
              </p>
              {el.val?
                <span className="checklist"> 
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
                :''
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
