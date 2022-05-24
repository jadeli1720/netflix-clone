import React from 'react';
import { BsChevronRight } from "react-icons/bs";

function FaqOptForm() {
  return (
    <div class="optFormSection">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form>
          <input type="text" placeholder="Email address" name="email address"/>
          <button type="submit" >
            Get Started
            <BsChevronRight/>
          </button>
        </form>
    </div>
  )
}

export default FaqOptForm