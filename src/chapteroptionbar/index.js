import React from "react";
import { OptionBar } from "./optionbarcss";

function ChapterOptionBar(prop) {
  const handlesubmit=(e)=>{
          e.preventDefault();
          console.log(e.targate)
  }
  return (
    <OptionBar>
      <form action={handlesubmit}>
        <label htmlFor="chapteroptionbar">Choose Chapter</label>
        <select  id="chapteroptionbar">
          {
            prop.props.map((chapter)=>{
              return(
                <option value={chapter}>{chapter}</option>
                )
              })
            }
        </select>
        <input type="submit" value="Submit" />
      </form>
    </OptionBar>
  )
}

export default ChapterOptionBar;