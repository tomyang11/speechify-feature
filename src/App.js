import React, { useState, useEffect, useRef } from "react";

import "./App.css";

const App = () => {

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pageContent, setPageContent] = useState([
    <h1>“Court Serendipity and Good Randomness”</h1>,
    <p>
      In the chapter on planning and adapting, we saw how the stories
      of both winning start-ups and notable careers rarely fit into a
      tidy, linear narrative—that despite the common assumption that
      entrepreneurs (or professionals) craft a single plan for their
      company (or career), then work tirelessly and single-mindedly to
      bring that plan to fruition, most successful companies and
      careers in fact go through many adaptations and iterations. They
      never really arrive at a fixed destination; it’s an endless
      journey. Along these lines, it’s easy in hindsight to attribute
      breakthrough career opportunities to a master plan. “And then,
      since I knew Nancy would be crucial to my success, I decided to
      randomly bump into her at a party.… ” Yeah, right. What more
      often happens is that you stumble upon the person or idea
      without specifically intending to. The key, then, is to raise
      the likelihood that you stumble upon something valuable—namely,
      by courting good randomness and seeing the opportunities that
      reveal themselves.
    </p>,
    <p>
      For John D’Agostino it all started because of a chance encounter
      in September 2002 at the Waldorf-Astoria hotel in New York City.
      D’Agostino was attending an event hosted by the Italian American
      Foundation to honor Vincent Viola, the chairman of the New York
      Mercantile Exchange (NYMEX). The NYMEX is where futures
      contracts for energy products (mainly oil) are bought and sold.
      Billions of dollars of transactions make it the world’s largest
      physical commodities futures exchange—and it made Vincent Viola
      a very powerful man indeed. D’Agostino, then in his twenties,
      was at the dinner to thank the foundation for helping pay for
      his business school tuition. His brief remarks caught the
      attention of Viola. Afterward, Viola handed D’Agostino his
      business card and said, “See if you can get on my calendar.”
      D’Agostino, an aspiring mogul, felt as a wannabe rock star would
      if Bono offered to give a few music lessons for free. He knew
      this was an opportunity he could not let pass. He fastidiously
      followed up and, after a dozen calls to Viola’s secretary,
      finally secured a dinner date. He got hired as a manager for
      special projects at the NYMEX, where he laid the groundwork for
      a joint energy exchange with the Dubai Development and
      Investment Authority. He was eventually promoted to vice
      president of strategy at the NYMEX (and was the subject of a
      book subtitled The True Story of an Ivy League Kid Who Changed
      the World of Oil, from Wall Street to Dubai). Not bad for a
      chance encounter.
    </p>,
    <p>
      Serendipity is the delightful word we use to describe
      accidental good fortune. An English novelist named Horace
      Walpole coined the word to describe a phenomenon he first
      observed in an old Persian fairy tale called “The Three Princes
      of Serendip.” In the story, the king sends his three sons on a
      journey to distant lands. The princes come upon some problems;
      at one point they are accused of thievery. Yet they exercise
      such impeccable judgment and insight (when exonerating
      themselves from charges that they stole a camel) that their
      father and other rulers decide to grant them the opportunity to
      become rulers and kings themselves. In a letter to a friend,
      Walpole says “serendipitous” is how he refers to the accidental
      good fortune of the Serendip princes: they got lucky, to be
      sure, but they also acted sagely and wisely in turning
      unexpected setbacks into opportunities. Winning the lottery is
      blind luck. Serendipity involves being alert to potential
      opportunity and acting on it.
    </p>,
    <p>
      Still, even if you are curious and alert, opportunities won’t 
      just fall into your lap. Almost every case of serendipity and 
      opportunity involves someone doing something. D’Agostino was attending 
      an event and making himself available and responsive to the powerful 
      people he met. Clooney was out auditioning for roles. Andrew Mason 
      at Groupon was iterating on a website. In the Persian fairy tale, the 
      Princes of Serendip “were not simply dallying their lives away in 
      luxury in Sri Lanka on some convenient palace couch. They were out 
      on the move, exploring, traveling widely when they encountered 
      their accidental good fortune,” says James Austin in his book Chase, 
      Chance, and Creativity.2 There’s a reason the story that inspired 
      the word serendipity involves exploration and journeys. You won’t 
      encounter accidental good fortune—you won’t stumble upon opportunities 
      that rocket your career forward—if you’re lying in bed. When you do 
      something, you stir the pot and introduce the possibility that seemingly 
      random ideas, people, and places will collide and form new combinations 
      and opportunities.3 By being in motion, you are spinning a web as 
      wide and as tall as possible in order to catch any interesting 
      opportunities that come your way.
    </p>,
    <p>
      It’s easy to say you should be in motion—but move where, specifically? 
      We’ll suggest some specific action items at the end of the chapter, 
      but courting randomness can be as simple as extending your next trip 
      to a different city by a day and meeting up with friends of friends. 
      Or going to a dinner party where you don’t know anyone. Or picking 
      up a magazine you don’t normally read.
    </p>,
    <p>
      Obviously, motion in literally any direction is unwise. Backpacking 
      around Darfur, for example, would generate randomness of the wrong 
      sort. But if the goal is to court good randomness, you don’t want 
      to be too directed in your motion, either. Most of the time you 
      simply do not know when, where, and how opportunity will knock. 
      At which conference will you fortuitously bump into the friend of 
      your mother who’s hiring in his medical office this summer? Which 
      producer in Hollywood will return your nth voicemail and request 
      a copy of your screenplay? Might a big-name reporter start following 
      you on Twitter and start calling you for quotes? There’s no way of 
      knowing for sure. So be open-minded, but set smart parameters. You 
      can go to a conference and approach random people; but better yet, 
      you can go to a conference, identify someone you know is interesting, 
      and approach the people you see that interesting person talking to. 
      You’re courting randomness, but you’re also being strategic.
    </p>,
    <p>
      As always, be yourself above all. Do the things that you think 
      you will benefit from—the things that play off your competitive 
      advantage and each of the three puzzle pieces. Going to parties 
      is an obvious way to put yourself out there, but if you don’t 
      like parties, don’t go to them.
    </p>,
    <p>
      As entrepreneur Bo Peabody says, “The best way to ensure that 
      lucky things happen is to make sure a lot of things happen.” Make 
      things happen, and in the long run, you’ll design your own serendipity, 
      and make your own opportunities.
    </p>
  ]);

  useEffect(() => {
    // const storedDivs = JSON.parse(localStorage.getItem('divs'));
    // if (storedDivs) {
    //   setDivs(storedDivs);
    // }

    if (submitted) {
      import(
        "https://storage.googleapis.com/speechify-api-cdn/speechifyapi.min.mjs"
      ).then(async (speechifyWidget) => {
        // this parent element for your article or listenable content
        const articleRootElement = document.querySelector(".Page");
    
        // widget configuration
        const config = {
          rootElement: document.querySelector(".Page"),
          // the Speechify API will call this method on each element and ignore elements for which this function returns true
          ignoreElements: (element) =>
            element.className === "ignore"
        };
      
        const widget = speechifyWidget.makeSpeechifyExperience(config);
        await widget.mount();
      });
    }
  }, [setPageContent, submitted]);


  const handleChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  }

  // const modifiedDivsNew = pageContent.map((div, index) => {
  //   const startingDivIndex = pageContent.findIndex(
  //     div => div.props.className === 'StartingDiv'
  //   );
  //   return (
  //     <div
  //       className={index < startingDivIndex ? 'ignore' : ''}
  //     >
  //       {div.props.children}
  //     </div>
  //   );
  // });

  const addClassnames = (pageContent, found) => {
    const startingDivIndex = pageContent.findIndex(div => div.props.children.includes(found));

    const modifiedDivs = pageContent.map((div, index) => {

      if (index === 0) {
        return (
          <h1 className={index < startingDivIndex ? 'ignore' : ''} >
            {div.props.children}
          </h1>
        )
      }

      return (
        <p className={index < startingDivIndex ? 'ignore' : ''} >
          {div.props.children}
        </p>
      );
    });
  
    return modifiedDivs;
  }
  

  const submitHandler = (event) => {
    event.preventDefault();

    const modified = addClassnames(pageContent, text);
    setPageContent(modified);
    // localStorage.setItem('divs', JSON.stringify(modifiedDivsNew));
    setText("");

    setSubmitted(true);
  }

	return (
		<div className="App">
      <form onSubmit={submitHandler}>
        <label>Enter any text from paragraph:</label>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Start Listening There</button>
      </form>
      <div className="Page">
        {pageContent.map((div) => (div))}
      </div>
		</div>
	);
}

export default App;
