<script lang="ts">
  import { each } from 'svelte/internal';
    import type { PageData } from './$types';
    
    export let data: PageData;
    let songs = data.body?.pageData.items[0]?.fields?.data

    let selectedSong = songs[0];
    let selectedYear = '9999';
    
</script>
<svelte:head>
    <title>Biisit - HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksin parhaat" />
</svelte:head>


<section class="wrap">
    <form>
      <select bind:value={selectedYear}>
        <option value="9999" selected="selected">Meidän speksi</option>
        <option value="2022">2022 Inferno</option>
        <option value="2021">2021 Inferno - the beginning</option>
        <option value="2020">2020 Avaruusristeily 2101</option>
        <option value="2019">2019 Viimeinen Lohikäärmeisku</option>
        <option value="2018">2018 Älä Ammu Ohi</option>
        <option value="2017">2017 Kruunun Kohtalo</option>
        <option value="2016">2016 Bratva Kontra</option>
        <option value="2015">2015 H.A.L.I.</option>
      </select>
  
      <select bind:value={selectedSong}>
        <option value="">Valitse biisi</option>
        {#each Object.entries(songs) as [key, value]}
          {#if value.year === selectedYear}
          <option value="{value}">{value.title}</option>
          {/if}
        {/each}
      </select>
    </form>
  
    {#if selectedSong}
      <div class="song" id={selectedSong.id}>
        <div class="name">{selectedSong.title}</div>
        <div class="origin">{selectedSong.origin}</div>
        {#each selectedSong.lines as line}
          {#if (line.length < 1)}
          <div class="verse"></div>
          {/if}
          {#if (line[0] == '#')}
          <p><em>{line.substring(1)}</em></p>
          {:else}
          <p>{line}</p>
          {/if}
        {/each}
      </div>
    {/if}
</section>
  
<style lang="scss">
    .song {
        margin: 20px;
        .name {
            // margin: 10px;
            font-size: 2rem;
        }
        .speksi {
            margin: 10px;
            padding-left: 5px;
            font-size: 1.5rem;
        }
        .origin {
            margin: 10px;
            padding-left: 5px;
            font-size: 1.5rem;
            font-style: italic;
        }
    
        .verse {
            height: 10px;
        }
        p {
            margin: 4px;
        }
        // }
        display: flex;
        flex-direction: column;
    }
</style>
