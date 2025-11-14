<script lang="ts">
  import "../styles/HomePage.css";
  import { onMount } from "svelte";

  let activeTab = "Arbeitnehmer";
  let showNavElements = false;

  const tabs = ["Arbeitnehmer", "Arbeitgeber", "Temporärbüro"];

  $: steps = getStepsForTab(activeTab);

  onMount(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (heroSection && window.innerWidth > 768) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        showNavElements = heroBottom <= 0;
      } else {
        showNavElements = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });

  function getStepsForTab(tab: string) {
    if (tab === "Arbeitgeber") {
      return [
        {
          number: 1,
          title: "Erstellen dein Lebenslauf",
          image: "/undraw_Profile_data_re_v81r.svg",
          position: "left",
        },
        {
          number: 2,
          title: "Erstellen ein Jobinserat",
          image: "/undraw_about_me_wa29.svg",
          position: "right",
        },
        {
          number: 3,
          title: "Wähle deinen neuen Mitarbeiter aus",
          image: "/undraw_swipe_profiles1_i6mr.svg",
          position: "left",
        },
      ];
    } else if (tab === "Temporärbüro") {
      return [
        {
          number: 1,
          title: "Erstellen dein Lebenslauf",
          image: "/undraw_Profile_data_re_v81r.svg",
          position: "left",
        },
        {
          number: 2,
          title: "Erhalte Vermittlungs- angebot von Arbeitgeber",
          image: "/undraw_job_offers_kw5d.svg",
          position: "right",
        },
        {
          number: 3,
          title: "Vermittlung nach Provision oder Stundenlohn",
          image: "/undraw_business_deal_cpi9.svg",
          position: "left",
        },
      ];
    } else {
      // Arbeitnehmer (default)
      return [
        {
          number: 1,
          title: "Erstellen dein Lebenslauf",
          image: "/undraw_Profile_data_re_v81r.svg",
          position: "left",
        },
        {
          number: 2,
          title: "Erstellen dein Lebenslauf",
          image: "/undraw_task_31wc.svg",
          position: "right",
        },
        {
          number: 3,
          title: "Mit nur einem Klick bewerben",
          image: "/undraw_personal_file_222m.svg",
          position: "left",
        },
      ];
    }
  }
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
  rel="stylesheet"
/>

<div class="homepage">
  <!-- Header -->
  <div class="header-wrapper">
    <div class="header-line"></div>
    <header class="header">
      <div class="header-content">
        <nav class="nav">
          <h1 class="nav-heading" class:show={showNavElements}>Jetzt Klicken</h1>
          <button class="nav-button" class:show={showNavElements}>
            Kostenlos Registrieren
          </button>
          <a href="/login" class="login-link">Login</a>
        </nav>
      </div>
    </header>
  </div>

  <!-- Scrollable Content -->
  <div class="content-wrapper">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Deine Job website</h1>
          <button class="cta-button">Kostenlos Registrieren</button>
        </div>
        <div class="hero-illustration">
          <!-- <img src="/undraw_agreement_aajr.svg" alt="Handshake agreement" /> -->
        </div>
        <div class="hero-illustration-mbl">
          <img src="/undraw_agreement_mbl.svg" alt="Handshake agreement" />
        </div>
      </div>
    </section>

    <!-- Tabs Section -->
    <section class="tabs-section">
      <div class="tabs-container">
        {#each tabs as tab}
          <button
            class="tab-button"
            class:active={activeTab === tab}
            on:click={() => (activeTab = tab)}
          >
            {tab}
          </button>
        {/each}
      </div>
      <h2 class="section-title">Drei einfache Schritte zu deinem neuen Job</h2>
    </section>

    <!-- Three Steps Section -->
    <section class="steps-section">
      <!-- {#if index < steps.length - 1} -->
      <div class="step-connector-one" />
      <div class="step-connector-two" />
      {#each steps as step, index}
        <div
          class="step-container {index === 1
            ? 'step-container-center'
            : ''} {step.position === 'left' ? 'step-left' : 'step-right'}"
        >
          <div
            class={`step-content ${
              index === 1
                ? "step-content-center step-content-2"
                : index === 2
                  ? "step-content-center step-content-3"
                  : "step-content-1"
            }`}
          >
            <div
              class="step-content-inner {index === 2
                ? 'step-content-inner-three'
                : ''}"
            >
              <div
                class="step-number {index === 1
                  ? 'step-number-center'
                  : ''} {index === 2 ? 'step-number-three' : ''}"
              >
                <span class="step-number-center-text">
                  {step.number}.
                </span>
              </div>
              <div class="step-text">
                <h3 class="step-title">{step.title}</h3>
              </div>
            </div>
            <div class="step-illustration">
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        </div>
      {/each}
    </section>

    <div class="cta-button-wrapper">
      <button class="cta-button-fixed">Kostenlos Registrieren</button>
    </div>
  </div>
</div>
