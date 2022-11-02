<svelte:head>
  <title>Tilaa esiintyjiä - HybridiSpeksi</title>
</svelte:head>
<section class="wrap">
    <h1>Keikkaillaanko?</h1>
    <div class="text">
        <h2>Bändi&shy;keikat</h2>
        <p>
            Kaipaatko huikeaa musiikillista menoa tapahtumaasi? HybridiSpeksin bilebändi,
            eli HS-bändi, soittaa musiikkia Abbasta Zappaan monipuolisilla kokoonpanoilla.
            Voit pyytää bändiä soittamaan haluamaasi musiikkia, tai antaa heille vapaat 
            kädet suunnitella tilaisuuteesi sopivaa musiikkia.
        </p>
        <p>
            Olemme soittaneet niin kamarimusiikkia akateemisia vuosijuhlilla kuin tanssittavaa 
            populaarimusiikkia yökerhoissa ja syntymäpäiväjuhlissa. Jokainen orkesterin jäsen on
            päätoiminen opiskelija, joten saatavuutemme selvitetään joka tilauksen yhteydessä erikseen.
            Tilaamalla meidät tuet opiskelijakulttuuria ja me pääsemme tekemään sitä mitä rakastamme!
        </p>
        <p>
            Toivomme, että tapahtumapaikalle hankitaan valmiiksi äänitekniikkaa ja osaava teknikko.
            Vaihtoehtoisesti yritämme parhaamme mukaan järjestää ne paikalle itse, mutta tästä sovitaan erikseen.
        </p>
        <p>
            Ota siis yhteyttä meihin hyvissä ajoin ja sovitaan yksityiskohdista. Varmasti edullinen
            hintalappumme räätälöidään tapauskohtaisesti. Nähdään lavalla!
        </p>
        <h3>Tiedustelut bändikeikoista: <a href="mailto:emerve@utu.fi">Elias Ervelä / emerve@utu.fi</a></h3>
        <div class="images">
            <img src="images/gigs/band_1.jpg" alt="Bändikuva 1" />
            <img src="images/gigs/band_2.jpg" alt="Bändikuva 2" />
            <img src="images/gigs/band_3.jpg" alt="Bändikuva 3" />
        </div>
    </div>

    <div class="text">
        <h2>Esiintyjät</h2>
        <p>
            Kaipaako pikkujouluillesi tai syntymäpäivällesi laadukasta ja persoonallista 
            esiintyjää? HybridiSpeksin näyttelijäkaarti on käytettävissäsi aina muutaman 
            hengen juontokeikoista isomman porukan improvisaatiospektaakkeliin asti. 
            Voit tuoda valmiin suunnitelmasi meille toteutettavaksi tai vaihtoehtoisesti 
            luomme tapahtumaasi ohjelman tarpeittesi mukaan.
        </p>
        <h3>Tiedustelut esiintyjäkeikoista: <a href="mailto:hallitus@hybridispeksi.fi"><span>hallitus@hybridispeksi.fi</span></a></h3>
        <div class="images">
            <img src="images/gigs/actors_1.jpg" alt="Bändikuva 3" />
        </div>
    </div>
</section>

<style lang="scss">
    section.wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
            margin-top: 20px;
            max-width: 50vw;
            text-align: justify;
        }
        .images {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            img {
                padding: 3px;
                width: 250px;
            }
        }
        @media only screen and (max-width: 767px) {
            .text {
                max-width: 95vw;
            }
            p {
                font-size: 1rem;
            }
            img {
                width: 60vw;
            }
        }
    }
</style>