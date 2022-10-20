<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    console.log(data);
    let text = data.content[0];
</script>

<svelte:head>
    <title>Speksi</title>
    <meta name="description" content="Speksistä ja HybridiSpeksistä" />
</svelte:head>

<section class="wrap">
    <img src="./logo.png" alt="" />
    <div class="text">
        <p>
            HybridiSpeksi on Turun yliopiston luonnontieteiden ja tekniikan
            opiskelijoiden vuosittain toteuttama teatteriproduktio. Ensimmäinen
            HybridiSpeksi nähtiin keväällä 2015 Barker-teatterilla.
        </p>
        <h2>2022 - Jo seitsemäs HybridiSpeksi!</h2>
        <p>
            Koronavuosien takaiskujen myötä HybridiSpeksi nähdään taas lavalla keväällä
            2022! Infernaaliseen seikkailutunnelmaan päästään, kun HybridiSpeksin
            näytökset valtaavat speksiscenen jo seitsemmättä kertaa Turun historiassa.
            HybridiSpeksi 2022 tuotanto- ja käsikirjoitustiimit valittiin jo kaudelle
            2021 ja työt onkin aloitettu jo viime vuonna. Muutama tuotantotiimin paikka
            on kuitenkin vielä auki, joten pysy kuulolla!
        </p>
        <p>
            Aikaisempien vuosien HybridiSpekseihin voit tutustua <a href="historia">täältä</a>
        </p>
        <h2>Mikä on speksi?</h2>
        <p>
            Speksi on interaktiivista opiskelijateatteria. Siinä yhdistyvät
            käsikirjoitettu teatteri, improvisaatio ja musikaali. Esityksissä yleisö voi
            vaikuttaa muutoin käsikirjoitetun esityksen kulkuun huutamalla “Omstart”,
            jolloin edellinen toiminta, repliikki tai musiikkinumero tehdään uudelleen
            erilaisella tavalla improvisoiden. Lisää spekseistä ja niiden historiasta
            voit lukea esimerkiksi <a href="https://fi.wikipedia.org/wiki/Speksi">Wikipediasta.</a>
        </p>
        <div>
            <h2>Muut Turun speksit</h2>
            <p>
                Turussa opiskelijaelämä näkyy vahvasti paitsi katukuvassa, niin myös
                kulttuurissa. HybridiSpeksi on vain yksi turkulaisten opiskelijoiden ja
                opiskelijamielisten toteuttama teatteriproduktio. Yhteensä speksejä on
                Turussa seitsemän.
            </p>
            <div class="speksit">
                <a href="https://spex.abo.fi/">
                    <img src="./logos/speksit/abospex.svg" alt="Akademiska Spexet"/>
                    <h3>Akademiska Spexet</h3>
                </a>
                <a href="http://turkulainenhumanistispeksi.fi/">
                    <img src="./logos/speksit/humanisti.svg" alt="Turkulainen humanistispeksi"/>
                    <h3>Turku&shy;lainen huma&shy;nisti&shy;speksi</h3>
                </a>
                <a href="https://iospeksi.fi/">
                    <img src="./logos/speksit/io.svg" alt="I/O Speksi"/>
                    <h3>I/O Speksi</h3>
                </a>
                <a href="https://lex.fi/toiminta/spex">
                    <img src="./logos/speksit/lex.svg" alt="LexSpex"/>
                    <h3>LexSpex</h3>
                </a>
                <a href="http://tlksspeksi.fi/">
                    <img src="./logos/speksit/tlks.svg" alt="TLKS Speksi"/>
                    <h3>TLKS Speksi</h3>
                </a>
                <a href="http://speksi.tuky.fi/">
                    <img src="./logos/speksit/tuky.svg" alt="TuKY Speksi"/>
                    <h3>Tuky Speksi</h3>
                </a>
            </div>
        </div>
    </div>
    <div class="img">
        <img src="./db/2018/2018_3.jpg" alt="" />
    </div>
</section>


<style lang="scss">
    p {

    }
    h2 {
        color: green;
        font-size: large;
    }
    section.wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
            color: red;
        }
        .img {
            img {
                max-width: 65vw;
            }
        }
    }
    .speksit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        img {
            width: 200px;
        }
    }
</style>
