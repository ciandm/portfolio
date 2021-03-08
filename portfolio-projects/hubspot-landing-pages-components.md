---
category: "Coding"
carousel: true
carouselImages: [
  {src: "/images/hubspot-landing-pages-components/hubspot-lp-components_editable.jpg", alt: "Home page of the GitHub jobs listing"},
  {src: "/images/hubspot-landing-pages-components/hubspot-lp-components_display.jpg", alt: "Page for the selected job"},
]
description: "Responsible for designing and building HubSpot components to be used in landing pages for marketing campaigns,
             using HTML, CSS, JavaScript and HubL - HubSpots own templating language. Components were designed with reusability
             and customisability in mind, allowing the content creators freedom to use them throughout multiple pages."
image: "/images/github-jobs-api/github-jobs-api_thumbnail.jpg"
imageAlt: "Designed and built HubSpot landing pages and components"
strapline: "HTML, CSS & JS"
tech: ["HTML", "CSS", "JavaScript", "HubL"]
title: "Designed and built HubSpot landing pages and components"
---

### Code snippets

#### Using HubL to create reusable components

```
<section class="suggested-blogs suggested-blogs--{{module.module_styling.background_colour}} {{module.module_styling.borders}}">
  <div class="suggested-blogs__wrapper suggested-blogs__wrapper--{{module.theme}}">
    {% if module.has_section_title == 'yes' %}
    <div class="suggested-blogs__heading">
      {{ module.section_title }}
    </div>
    {% endif %}
    <div class="suggested-blogs__container">
      {% for card in module.cards  %}
        <a href="{{ card.card_link.url.href}}" {% if card.card_link.open_in_new_tab %} target="_blank" {% endif %} class="suggested-blogs__link">
        <div class="suggested-blogs__card">
          <div class="suggested-blogs__image">
            <img src="{{ card.card_image.src }}" alt="{{ card.card_image.alt }}"/>
          </div>
          <div class="suggested-blogs__description">
            <h4 class="suggested-blogs__name">{{ card.card_title }}</h4>
            {{ card.card_description }}
            {% if module.show_button == 'yes' %}
            <button class="suggested-blogs__btn">{{module.button_text}}</button>
            {% endif %}
            </div>
        </div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
```

--- 

#### Building a custom audio player with vanilla JavaScript
![The custom audio player built for a podcast landing page, with a waveform created using Wavesurfer.js](/images/hubspot-landing-pages-components/hubspot-lp-components_podcast.jpg)
Figuring out how to create this interactive component was a fun challenge. As the subscription was shared across multiple components - the subscription selection, step list and modal - I created a  provider with a useSubscription hook that allowed the components mentioned to access this data. As there was sometimes multiple actions happening every time a user selected an option, I used a reducer. This allowed me to solve the complex state management with easy to follow actions.

```
// Defining selectors
const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const currentTime = document.getElementById("currentTime");
const audioTime = document.getElementById("audioTime");
const audioInteract = document.getElementById("audioInteract");
const loaderContainer = document.getElementById("loaderContainer");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const url = document.querySelector('#track');

// get peaks, which is attached to [data-peaks] of audio file, which comes from 'module.audio_peaks'
const peaks = document.querySelector('#track').getAttribute('data-peaks').split(",");

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  cursorColor: '#FFF',
  waveColor: '#FBFCFD20',
  progressColor: '#4DB377',
  barWidth: 2,
  skipLength: 5,
  responsive: true,
  barHeight: 1.5,
  backend: 'MediaElement',
  mediaType: 'audio'
});

// immediately check if user is on a mobile device
(function() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device - animate in popup
    popup.classList.add("popup__container--in");
  } else {
    // remove from DOM.
    popup.remove();
  }
})();

// Loading wavesurfer
wavesurfer.load(url, peaks);

// When it is ready, get it's duration and format it to insert into as audio length.
wavesurfer.on("ready", () => {
  const duration = Math.ceil(wavesurfer.getDuration());
  audioTime.innerText = formatTime(duration);
  showAudio();
})

wavesurfer.on("loading", (e) => {
})

// Audioprocess fires continuously as it runs
wavesurfer.on("audioprocess", () => {
  const playingTime = Math.ceil(wavesurfer.getCurrentTime());
  currentTime.innerText = formatTime(playingTime);
})

wavesurfer.on("finish", () => {
  playPause.classList.remove("audio__button--paused")
  playPause.classList.add("audio__button--playing")
})

// Changing button shown on UI
playPause.addEventListener("click", () => {

  wavesurfer.playPause();
  if(wavesurfer.isPlaying()) {
    playPause.classList.remove("audio__button--playing")
    playPause.classList.add("audio__button--paused")
  } else {
    playPause.classList.remove("audio__button--paused")
    playPause.classList.add("audio__button--playing")
  }
})

// These lengths are set by skipLength option when the instance was created.
backward.addEventListener("click", () => {
  wavesurfer.skipBackward();
})

forward.addEventListener("click", () => {
  wavesurfer.skipForward();
})

// When user is seeking through waveform, play audio if it is already being played, and set the current time to the selected part.
wavesurfer.on("seek", () => {
  if(wavesurfer.isPlaying()) {
    wavesurfer.play();
  }
  const playingTime = Math.ceil(wavesurfer.getCurrentTime());
  currentTime.innerText = formatTime(playingTime)
})

function formatTime(time) {
  if (time % 60 === 0) {
    return `${time / 60}:00`
  }

  if (time / 60 < 1) {
    return `0:${time < 10 ? '0' + time : time}`
  }

  if(time / 60 > 1) {
    let mins = Math.floor(time / 60);
    const seconds = time % 60;
    return `${mins}:${seconds < 10 ? '0' + seconds : seconds}`
  }
}

// remove loader container from the DOM and show the waveform & controls.
function showAudio() {
  loaderContainer.remove();
  audioInteract.classList.remove("audio__interact--hidden");
}

popupClose.addEventListener("click", () => {
  popup.remove();
})
```

--- 

#### Title
```
{% if module.module_styling.background_colour == 'background-charcoal' or module.module_styling.background_colour == 'background-gradient' %}
{% set titleColour = "light" %}
{% else %}
{% set titleColour = "dark" %}
{% endif %}

<div class="hero-banner {{module.module_styling.background_colour}} hero-banner--{{module.theme}} {{module.borders}}">
  <div class="hero-banner__wrapper">
    <div class="hero-banner__content">
      <div class="hero-banner__column">
        {% if module.text_content.has_logo == 'yes' %}
        <div class="hero-banner__logo-container hero-banner__logo-container--mobile">
            <img src="{{module.text_content.company_logo.src}}" alt="{{module.text_content.company_logo.alt}}" class="hero-banner__logo">
          </div>
        {% endif %}
        {% if module.text_content.tagline %}
        <span class="hero-banner__tagline hero-banner__tagline--{{titleColour}}">{{module.text_content.tagline}}</span>
        {% endif %}
        <h1 class="hero-banner__title hero-banner__title--{{module.text_content.heading_text_colour}}">{{module.text_content.page_title}}</h1>
        {% if module.text_content.has_text_below_title == 'yes' %}
          <div class="hero-banner__text richtext-container 
                      richtext-container--check-margin 
                      richtext-container--{{module.theme}} 
                      {{module.text_content.check_mark_colour}} 
                      {{module.text_content.check_mark_type}} 
                      {{module.text_content.text_colour}}"
               >
            {{module.text_content.text_below_heading}}
          </div>
        {% endif %}
        <div class="hero-banner__cta">
        {% if module.text_content.has_cta == 'yes' %}
          {% if module.text_content.cta_group.link_type == 'external' %}
            <a href="{{module.text_content.cta_group.external_link.url.href}}"
          {% if module.text_content.cta_group.external_link.open_in_new_tab %} target="_blank" {% endif %}
          {% if module.text_content.cta_group.external_link.no_follow %} rel="nofollow" {% endif %}
            class="btn btn--green">{{module.text_content.cta_group.cta_text}}</a>
          {% elif module.text_content.cta_group.link_type == 'internal' %}
            <a href="#{{module.text_content.cta_group.section_id_hook}}" class="btn btn--green">{{module.text_content.cta_group.cta_text}}</a>
          {% endif %}
        {% endif %}
        {% if module.text_content.has_logo == 'yes' %}
          <div class="hero-banner__logo-container hero-banner__logo-container--desktop">
            <img src="{{module.text_content.company_logo.src}}" alt="{{module.text_content.company_logo.alt}}" class="hero-banner__logo">
          </div>
        {% endif %}
        </div>
      </div>
    </div>
    <div class="hero-banner__image">
      <img src="{{ module.image.hero_image.src}}" alt="{{module.image.hero_image.src}}" class="hero-banner__img">
    </div>
  </div>
</div>
```