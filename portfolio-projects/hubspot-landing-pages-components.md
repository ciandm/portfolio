---
category: "Coding"
carousel: true
carouselImages: [
  {src: "/images/hubspot-landing-pages-components/hubspot-lp-components_editable.jpg", alt: "Component editing interface on HubSpot"},
  {src: "/images/hubspot-landing-pages-components/hubspot-lp-components_gated.jpg", alt: "Landing page designs for gated content"},
  {src: "/images/hubspot-landing-pages-components/hubspot-lp-components_blogs.jpg", alt: "An example of a component that suggests more blogs"},
  {src: "/images/hubspot-landing-pages-components/hubspot-lp-components_campaigns.jpg", alt: "Campaign landing pages with forms, modals and embedded video"},
]
date: "2020"
description: "Responsible for designing and building HubSpot components to be used in landing pages for CurrencyFair's marketing    campaigns, using HTML, CSS, JavaScript and HubL - HubSpots own templating language. Components were designed with reusability and customisability in mind, allowing the content creators freedom to use them throughout multiple pages."
strapline: "HTML, CSS & JS"
tech: ["HTML", "CSS", "JavaScript", "HubL"]
thumbnail: "/images/hubspot-landing-pages-components/hubspot-lp-components_thumbnail.jpg"
title: "Designed and built HubSpot landing pages and components"
---

### Code snippets

#### Using HubL to create reusable components

HubL is HubSpot's extension of Jinjava, a templating engine based on Jinja. It is a powerful language that allowed me to **build reusable modules that could be placed on landing pages using HubSpot's drag and drop interface** by the content creators. In the content editor, the end user could input the content which could be accessed through the `{{ module.parameter }}` syntax. This gave the editor freedom to place content however they liked, and allowed them to style the modules to fit the page and surrounding modules and meant modules were very easy to reuse.

```html
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

I was tasked with **building a podcast hosting page**, which was used as bonus content for people who signed up and viewed the The CurrencyFair Business Webinar - Business Culture in Asia. To achieve this through HubSpot, I had to **use vanilla JavaScript to create a custom-built audio player**. Using wavesurfer.js, I was able to **integrate a waveform** for each audio clip to mirror some of the video ads that I created too which contained snippets of the speakers and a moving waveform. During the development, I encountered an issue with Safari which only rendered about ten percent of the waveform and audio when wavesurfer.js was used. To circumvent this issue, I created a separate component to pre-render the audio peaks and then placed this on the HTML element in the DOM, under the attribute `data-peaks`. This meant there was also less load time on the audio itself, as the peaks had already been determined. I also had to generate a pop up, to let the user know that they needed to turn on the volume switch on their mobile phone as audio could not be played otherwise.

```javascript
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

#### Fully customisable and reusable components

In order to ensure the best experience for content creators when building landing pages, I had to **build modules with flexability in mind**. This approach let the end user who was building the pages use a specific module across multiple pages, each with a possibly different design or content each time. For example, they could choose not to have text below a title on a hero section or change the theme of the module from business branding to personal branding. This **wide range of customisability on each module** meant multiple pages were able to be designed very quickly, whilst still remaining branded and have a similar look and feel. Using the powerful drag and drop page builder from HubSpot, modules could be easily moved around pages and styling from section borders, background colours to padding meant they could **fit anywhere on the page and slot in seamlessly with the other surrounding modules**.

```html
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