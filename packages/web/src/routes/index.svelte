<script lang="ts">

</script>

<svelte:head>
  <title
    >Download and convert a Youtube Full Album Video to a zipped MP3 - Youtube
    To Album</title
  >
</svelte:head>

<h1>Youtube To Album</h1>

<section>
  <h2>Paste your video URL!</h2>

  <form
    on:submit={(e) => {
      e.preventDefault();
    }}
  >
    <label for={'#video'}>URL</label>
    <input for={'#video'} />

    <button type={'submit'}>Get Album!</button>
  </form>
</section>

<style lang="scss">
  :root {
    --youtube-red: #ff0000;
  }

  h1 {
    color: var(--youtube-red);
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 1em;
    }

    button {
      width: 50%;
      min-height: 50px;

      background-color: var(--youtube-red);
      border: 0;

      color: white;
      font-weight: bold;
    }
  }

  section {
    padding: 1em;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
