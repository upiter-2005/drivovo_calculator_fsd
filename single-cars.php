<?php get_header(); ?>
<style>
    .calcBox{
        border-radius: 18px;
        background: #010101;
        color: #fff;
        padding-bottom: 30px;
        margin-top: 24px;
        margin-bottom: 12px;
    }
    .calcBox h2{
        text-align: center;
        padding: 20px 0;
        font-size: 36px;
        text-transform: uppercase;
    }
    .calcFields {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .calcFields .go {
    padding: 8px 28px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 20px;
        padding: 16px 24px;
    }
    select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    font-size: 16px;
    padding: 0 1em;
    color: #1c1a1a;
    background-color: #d2d2d2;
    background-image: none;
    cursor: pointer;
    }
    /* Remove IE arrow */
    select::-ms-expand {
    display: none;
    }
    .go{
        background: #9a1919;
    }
    /* Custom Select wrapper */
    .select {
    position: relative;
    display: flex;
    width: 20%;
    height: 3em;
    border-radius: 8px;
    border: 1px solid #eee;
    overflow: hidden;
    }
    /* Arrow */
    .select::after {
    content: url(https://kata.net.ua/wp-content/themes/kata/img/down-d.svg);
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
    transition: 0.25s all ease;
    pointer-events: none;
    }

    /* Transition */
    .select:hover::after {
    color: #f39c12;
    }
    .disableGo {
    cursor: not-allowed;
    opacity: 0.5;
    }
    .resultCalc {

    font-weight: 500;
    color: #d2d2d2;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    transition: all 0.4s ease;
    }
    .resultCalcActive {
    padding-top: 56px;
    height: 333px !important;
    }
    .resultCalc_title {
    padding-bottom: 14px;
    font-size: 24px;
    text-transform: uppercase;
    width: 100%;
    border-bottom: 1px solid #d2d2d2;
    text-align: center;
    }
    .resultCalc_row {
    margin: 12px 16px;
    text-align: center;
    }
    .borderResult {
    margin: 12px 0;
    padding: 16px 50px;
    font-weight: 700;
    font-size: 22px;
    color: #ec1c24;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
    }
    .titles_row {
    margin: 12px 0;
    padding: 8px 0;
    text-align: left;
    }
    .titles_row_100 {
    max-width: 100px;
    }
    .borderResult span {
    color: #e9e9e9;
    }
    .lightResult {
    background-color: #e9e9e9 !important;
    color: #1c1a1a;
    }
    .lightResult span {
    color: #d10910;
    }

    @media (max-width: 768px) {
        .calcBox h2{
            font-size: 24px;
            margin-bottom: 8px;
        }
    .resultCalc {
        font-size: 10px;
        line-height: 20px;
    }
    .calcFields {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .select {
        width: 100%;
        max-width: 550px;
        margin: 8px;
    }
    .calcImg {
        display: none;
    }
    .borderResult {
        padding: 3px 11px;
    }
    .resultCalc_row {
        margin: 5px;
        width: 23%;
    }
    .titles_row_100 {
        max-width: 58px;
    }
    .borderResult {
        font-size: 13px;
    }
    .titles_row {
        margin: 0;
    }
    .resultCalc_title {
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .resultCalcActive {
        height: 285px !important;
    }
    .parent-li::after,
    a.mob-collapse::after {
        right: -13px;
        top: 3px;
    }
    .infoBlock_white h2 {
        margin-bottom: 0 !important;
    }
    
    
    
    }
</style>
<style>
    
    .chart-container {
      width: 100%;
      
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 20px;
    }
    .chart-container h2{
      font-size: 20px;
    }
    .chart-container canvas {
      width: 100% !important;
      height: auto !important;
      aspect-ratio: 3 / 2; 
    }

    @media (max-width: 768px) {
      .chart-container canvas {
        height: 250px !important;
      }
    }
    /* #powerChart, #momentChart{
      width: 600px;
    } */
    /* @media(max-width: 768px){
      #powerChart, #momentChart{
        width: 340px;
      }
      canvas {
        width: 100%!important;
        height: 300px!important;
      }
    } */
  </style>


<?php
global $post;
$current_post =  $post->ID;
?>
<?php while( have_posts() ) : the_post();?>
<section class="baner pageBaner" class="" > 
    <img src="https://kata-serwis.pl/wp-content/uploads/2023/09/hands-mechanic-using-diagnostic-tool-1-1.jpeg" alt="" class="bgPk d-none d-md-block">
    <img src="https://kata-serwis.pl/wp-content/uploads/2024/01/Banner-4.png" alt="" class="bgMob d-md-none">
      <div class="container-max">
        <div class="row">
          <div class="col-md-6">
            <h1>Chip-tuning <?php the_title(); ?></h1> 
            <p class="descr d-none d-md-block">Ustawienia fabryczne: <br> <?php echo the_field('originpower'); ?> KM / <?php the_field('momentorigin'); ?> Nm → Stage 1: <?php the_field('aftertuning'); ?> KM / <?php the_field('aftermoment'); ?> Nm. <br>
Przyrost: +<?php echo (int)get_field('aftertuning') - (int)get_field('originpower');  ?> KM / +
<?php echo (int)get_field('aftermoment') - (int)get_field('momentorigin');  ?> Nm.
</p>

            
            
          </div>
          <div class="col-md-5 offset-md-1">
            <form class="banerForm" id="banerFormTop">
                <?php if(pll_current_language() == "pl") :?>
                <h3>Szybka konsultacja</h3>
              <p>Zostaw swój numer telefonu, a nasi specjaliści skontaktują się z Tobą w ciągu <span> 5 minut.</span></p>
                <?php endif; ?>
                <?php if(pll_current_language() == "ru") :?>
                    <h3>Быстрая запись на сервис</h3>
                    <p>Отправьте заявку и наша команда специалистов свяжется с Вами в течении <span>5 минут.</span> </p>
                <?php endif; ?>
              
                  <p>Dostępne miasta: <br>
                    Poznań, Warszawa, Kraków, Gdańsk
                  </p>
              <input type="tel" name="tel" id="banerFormToptel" placeholder="<?php if(pll_current_language() == "pl") :?>Wpisz swój numer telefonu<?php endif; ?><?php if(pll_current_language() == "ru") :?>Ваш телефон<?php endif; ?>" >

              <button type="submit" class="accBtn">
              <?php if(pll_current_language() == "pl") :?>
                Zamów konsultację
                <?php endif; ?>
                <?php if(pll_current_language() == "ru") :?>
                    Получить консультацию
                <?php endif; ?>
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="blogPost" itemscope itemtype="https://schema.org/NewsArticle">
    <div class="container-max">
      

        <h1 class="pt70" itemprop="headline"><?php the_title(); ?></h1>
      
        
        
        <!-- <div><?php the_field('brand'); ?></div>
        <div><?php the_field('model'); ?></div>
        <div><?php the_field('yeartype'); ?></div>
        <div><?php the_field('enginetype'); ?></div>
        <div>Мощность<?php the_field('originpower'); ?></div>
        <div>Мощность<?php the_field('aftertuning'); ?></div>
        <div>Крут момент<?php the_field('momentorigin'); ?></div>
        <div>Крут момент<?php the_field('aftermoment'); ?></div> -->
          <div class="charts-wrapper">
            <div class="chart-container" style="max-width:590px;margin:auto;">
              <h2>Przyrost mocy, KM</h2>
              <canvas id="powerChart" ></canvas>
          
            </div>
      
            <div class="chart-container" style="max-width:590px;margin:auto;">
      
              <h2>Przyrost momentu obrotowego, Nm</h2>
              <canvas id="momentChart" ></canvas>
            </div>
          </div>    
         <br>
        <div>Przykładowy wykres — dokładne dane zależą od stanu auta i jakości paliwa.</div>
 
    </div>
</section>

<section class="calcBox">
<div class="resultCalc">
				   <p class="resultCalc_title"><?php the_title(); ?></p>
				   <div class="powerRow resultCalc_row titles_row_100">
					    <div class="titles_row"><?php if(pll_current_language() == "ru") :?>Мощность двигателя:	<?php endif; ?>
	                        <?php if(pll_current_language() == "pl") :?>Moc:<?php endif; ?>
                        </div>
					    <div class="titles_row"><?php if(pll_current_language() == "ru") :?>Крутящий момент:	<?php endif; ?>
	                        <?php if(pll_current_language() == "pl") :?>Moment obrotowy:<?php endif; ?></div>
				        </div>
				    <div class="powerRow resultCalc_row">
					   <div><?php if(pll_current_language() == "ru") :?>Сток:	<?php endif; ?>
                        <?php if(pll_current_language() == "pl") :?>Wartość przepływu:<?php endif; ?></div>
					   <div class="stockPower borderResult"><span><?php the_field('originpower'); ?></span> Hp</div>
					   <div class="stockMoment borderResult"><span><?php the_field('momentorigin'); ?></span> NM</div>
				   </div>
				   <div class="powerRow resultCalc_row">
					   <div>  <?php if(pll_current_language() == "ru") :?>После доработок:	<?php endif; ?>
	                    <?php if(pll_current_language() == "pl") :?>Po rewizjach:<?php endif; ?></div>
					   <div class="afterPower borderResult"><span><?php the_field('aftertuning'); ?></span> Hp</div>
					   <div class="afterMoment borderResult"><span><?php the_field('aftermoment'); ?></span> NM</div>
				   </div>
				  
				   <div class="powerRow resultCalc_row calcImg">
					   <img src="img/calcArr.svg" alt="">
				   </div>
				   <div class="powerRow resultCalc_row">
					   <div> <?php if(pll_current_language() == "ru") :?>Прирост мощности:	<?php endif; ?>
	                     <?php if(pll_current_language() == "pl") :?>Zysk mocy:<?php endif; ?></div>
					   <div class="differencePower borderResult lightResult">+<span><?php echo (int)get_field('aftertuning') - (int)get_field('originpower');  ?></span> hp</div>
					   <div class="differenceMoment borderResult lightResult">+<span><?php echo (int)get_field('aftermoment') - (int)get_field('momentorigin');  ?></span> NM</div>
				   </div>
				  
			   </div>
</section>




<section class="lightPrice prices">
  <div class="container-max">
    <div class="row">
     <div class="col-md-12"><h2>Usługi i ceny</h2></div>
     <div class="col-md-12">
              <div class="priceItem titleRow">
                <span>Transport osobowy</span>
            </div>
            
        
                        <div class="priceItem">
                <span>Zwiększenie mocy silnika „Stage 1”</span>
                <span>od 600 zł</span>
            </div>
            
        
                        <div class="priceItem titleRow">
                <span>Transport ciężarowy</span>
            </div>
            
        
                        <div class="priceItem">
                <span>Zwiększenie mocy silnika „Stage 1”</span>
                <span>od 700 zł</span>
            </div>
            
        
          
     </div>
    </div>
  </div>
</section>


<section class="dark callFormBlock" style="background-image: url(https://kata-serwis.pl/wp-content/uploads/2023/09/hands-mechanic-using-diagnostic-tool-1-1.jpeg);">
  <div class="container-max">
    <div class="row">
      <div class="col-md-7">
        <h2 class="largeTitle">Otrzymaj szczegółowe obliczenie kosztów chiptuning <br> Stage-1  </h2>
        <form action="" class="subscribe">
            <div>
              <input type="tel" placeholder="Wpisz swój numer telefonu  " class="subscrInput">
              <button type="submit" class="accBtn" placeholder="Ваш телефон">
              	           Zamów konsultację  
                </button>
            </div>
          </form>
      </div>
      <div class="col-md-5">
      </div>
    </div>
  </div>
</section>


<section class="faq" id="faq">
  <div class="container-max">
    <div class="row">
      <div class="col-12">
      	  <h2>Często Zadawane Pytania</h2>        
      </div>
      <div class="col-md-7">
        <div id="accordion" class="accordion section-com">

                     
 
                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb1">
                <h3 class="card-title" id="titleTab1"> Czy Stage-1 jest bezpieczny dla silnika?</h3>
                </div>
                <div id="tb1" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText11">Tak — pod warunkiem prawidłowej diagnostyki przed modyfikacją i konserwatywnych map. Pracujemy w granicach bezpieczeństwa producenta.</div>
                </div>
                </div>
                           
 
                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb2">
                <h3 class="card-title" id="titleTab2"> Czy chip tuning skraca żywotność podzespołów?</h3>
                </div>
                <div id="tb2" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText12">Nie, jeśli auto jest sprawne, a mapy są dobrane rozsądnie. Dodatkowe obciążenia mieszczą się w marginesach przewidzianych przez producenta.</div>
                </div>
                </div>
                           
 
                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb3">
                <h3 class="card-title" id="titleTab3"> Czy wykonujecie pomiar mocy przed i po?</h3>
                </div>
                <div id="tb3" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText13">Tak, robimy wykresy przed/po na hamowni oraz logi parametrów (m.in. doładowanie, zapłon/AFR, korekty). </div>
                </div>
                </div>
                           
 
                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb4">
                <h3 class="card-title" id="titleTab4"> Jaki benzyn/ON mam tankować po Stage-1?</h3>
                </div>
                <div id="tb4" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText14">Benzyna 95/98 zgodnie z zaleceniem do mapy; w dieslu paliwo zgodne ze specyfikacją producenta. Lepsze paliwo = stabilniejszy wynik. </div>
                </div>
                </div>

                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb46">
                <h3 class="card-title" id="titleTab46"> Co jeśli auto ma błędy (DPF/EGR/NOx/sondy)?</h3>
                </div>
                <div id="tb46" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText46">Najpierw diagnozujemy i usuwamy usterki. Nie stroimy samochodów z aktywnymi błędami układów emisji. </div>
                </div>
                </div>

                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb47">
                <h3 class="card-title" id="titleTab47">  Czy można wrócić do serii (soft stock)?</h3>
                </div>
                <div id="tb47" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText47">Tak. Zachowujemy kopię oprogramowania i na życzenie przywracamy ustawienia fabryczne. </div>
                </div>
                </div>
                       
                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb48">
                <h3 class="card-title" id="titleTab48">  Jak długo trwa Stage-1?</h3>
                </div>
                <div id="tb48" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText48">Zwykle 3–5 godzin: diagnostyka, odczyt, modyfikacja, pomiary i test drogowy.</div>
                </div>
                </div>

                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb49">
                <h3 class="card-title" id="titleTab49">  Czy modyfikacja wpływa na gwarancję producenta/ubezpieczenie?</h3>
                </div>
                <div id="tb49" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText49">Może. Jeśli auto jest na fabrycznej gwarancji — skonsultuj to wcześniej. Dajemy własną gwarancję na nasz soft.</div>
                </div>
                </div>

                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb491">
                <h3 class="card-title" id="titleTab491">  DSG/automat — czy wymagana jest modyfikacja skrzyni?</h3>
                </div>
                <div id="tb491" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText491">Często nie, ale przy silnikach o większym przyroście zalecamy TCU tune lub adaptację limitów momentu.</div>
                </div>
                </div>

                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb492">
                <h3 class="card-title" id="titleTab492">Czy wynik jest zawsze taki sam jak w tabeli?</h3>
                </div>
                <div id="tb492" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText492">Nie — zależy od kondycji samochodu, paliwa, przebiegu i osprzętu. Dlatego robimy pomiary i logi.</div>
                </div>
                </div>

                <div class="custom-acc">
                <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#tb492">
                <h3 class="card-title" id="titleTab492">Co obejmuje wasza gwarancja?</h3>
                </div>
                <div id="tb492" class=" collapse" data-parent="#accordion">
                <div class="card-body" id="tabText492">Bezterminowa gwarancja na nasz soft: ewentualne korekty map oraz przywrócenie do serii — bez opłat.</div>
                </div>
                </div>
              
                    
          
        </div>
      </div>

      <div class="col-md-4 offset-md-1">
        <div class="darkWidget">
           <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/askIco.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/askIco.svg"><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/askIco.svg" alt=""></noscript>
           	         <h3>Czy masz inne pytania?</h3>
           	         
                <p>Jeśli nie znalazłeś odpowiedzi na interesujące Cię pytania wyślij do nas wiadomość lub zadzwoń pod numer <a href="tel:+48799355737" class="phoneBgc">+48 799 355 737</a>.
                Możesz również się skontaktować z nami poprzez media społecznościowe: </p>
             
                <a href="https://api.whatsapp.com/send?phone=48570428673" class="accBtn"><img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tg.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/tg.svg"><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/tg.svg" alt=""></noscript>  WhatsApp</a>
                       
                
          
        </div>
      </div>
    </div>
  </div>
</section>


<section class="whyItems dark">
  <div class="container-max">
    <div class="row">
      <div class="col-12">
        <h2>DLACZEGO WARTO WYKONAĆ CHIPTUNING "STAGE-1" U NAS?</h2>
      </div>

              <div class="col-md-3">
            <div class="whyItem_light">
            <div class="icoBox redBg"><img alt="" data-src="https://kata-serwis.pl/wp-content/uploads/2023/09/i01.svg" class=" lazyloaded" src="https://kata-serwis.pl/wp-content/uploads/2023/09/i01.svg"><noscript><img src="https://kata-serwis.pl/wp-content/uploads/2023/09/i01.svg" alt=""></noscript></div>
            <p>Indywidualne projektowanie</p>
            <span>Mapy tworzymy pod Twój egzemplarz po diagnostyce i logach, z naciskiem na bezpieczeństwo i kulturę pracy.</span>
            </div>
        </div>
              <div class="col-md-3">
            <div class="whyItem_light">
            <div class="icoBox "><img alt="" data-src="https://kata-serwis.pl/wp-content/uploads/2023/09/g969.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/uploads/2023/09/g969.svg"><noscript><img src="https://kata-serwis.pl/wp-content/uploads/2023/09/g969.svg" alt=""></noscript></div>
            <p>Bezterminowa gwarancja</p>
            <span>Za nasz soft odpowiadamy bez ograniczeń czasowych; w razie potrzeby przywrócimy ustawienia lub zaktualizujemy mapę.</span>
            </div>
        </div>
              <div class="col-md-3">
            <div class="whyItem_light">
            <div class="icoBox "><img alt="" data-src="https://kata-serwis.pl/wp-content/uploads/2023/09/q1.svg" class=" lazyloaded" src="https://kata-serwis.pl/wp-content/uploads/2023/09/q1.svg"><noscript><img src="https://kata-serwis.pl/wp-content/uploads/2023/09/q1.svg" alt=""></noscript></div>
            <p>Oprogramowanie licencyjne</p>
            <span>Pracujemy na legalnych, aktualnych narzędziach i bazach, co gwarantuje stabilność i powtarzalność rezultatów.</span>
            </div>
        </div>
              <div class="col-md-3">
            <div class="whyItem_light">
            <div class="icoBox "><img alt="" data-src="https://kata-serwis.pl/wp-content/uploads/2023/09/Availability.svg" class=" lazyloaded" src="https://kata-serwis.pl/wp-content/uploads/2023/09/Availability.svg"><noscript><img src="https://kata-serwis.pl/wp-content/uploads/2023/09/Availability.svg" alt=""></noscript></div>
            <p>Pomiar mocy</p>
            <span>Wykresy przed/po z hamowni potwierdzają realny efekt i pozwalają precyzyjnie zweryfikować osiągi.</span>
            </div>
        </div>
      
    </div>
  </div>
</section>



<section>

  <div class="container-max">
    <div class="row">
                                 
                <div class="col-md-4"><h2>Co mówią nasi klienci?</h2></div>
                
   
            <div class="col-md-8"></div>
                <div class="col-12">
                     <div class="owl-carousel owl-theme owl-reviews owl-loaded owl-drag">

                    <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1215px, 0px, 0px); transition: 2s; width: 3342px;"><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Zgłosiłem się na wykonanie tuningu Stage-1 w mojej Audi A4. Specjaliści wykonali świetną pracę, teraz samochód jeździ znacznie szybciej. Serwis na wysokim poziomie, doskonały wynik!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Tomasz</div>
                        </div></div><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wgrano Stage-1 do mojego BMW 320i. Po procedurze auto ma o wiele lepsze rozpędzanie oraz reakcję na gaz we wszystkich przedziałach obrotów silnika. Praca została wykonana szybko i profesjonalnie. Jestem bardzo zadowolony z rezultatu, polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Michał</div>
                        </div></div><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wykonałem tuning Stage 1 na moim Volkswagenie Golf. Samochód został zauważalnie szybszy i bardziej dynamiczny. Praca została wykonana na najwyższym poziomie, jestem bardzo zadowolony z rezultatu. Polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Piotr</div>
                        </div></div><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Zgłosiłem się na wykonanie tuningu Stage-1 w mojej Audi A4. Specjaliści wykonali świetną pracę, teraz samochód jeździ znacznie szybciej. Serwis na wysokim poziomie, doskonały wynik!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Tomasz</div>
                        </div></div><div class="owl-item active" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wgrano Stage-1 do mojego BMW 320i. Po procedurze auto ma o wiele lepsze rozpędzanie oraz reakcję na gaz we wszystkich przedziałach obrotów silnika. Praca została wykonana szybko i profesjonalnie. Jestem bardzo zadowolony z rezultatu, polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Michał</div>
                        </div></div><div class="owl-item active" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wykonałem tuning Stage 1 na moim Volkswagenie Golf. Samochód został zauważalnie szybszy i bardziej dynamiczny. Praca została wykonana na najwyższym poziomie, jestem bardzo zadowolony z rezultatu. Polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Piotr</div>
                        </div></div><div class="owl-item active" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Zgłosiłem się na wykonanie tuningu Stage-1 w mojej Audi A4. Specjaliści wykonali świetną pracę, teraz samochód jeździ znacznie szybciej. Serwis na wysokim poziomie, doskonały wynik!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Tomasz</div>
                        </div></div><div class="owl-item cloned active" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wgrano Stage-1 do mojego BMW 320i. Po procedurze auto ma o wiele lepsze rozpędzanie oraz reakcję na gaz we wszystkich przedziałach obrotów silnika. Praca została wykonana szybko i profesjonalnie. Jestem bardzo zadowolony z rezultatu, polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Michał</div>
                        </div></div><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wykonałem tuning Stage 1 na moim Volkswagenie Golf. Samochód został zauważalnie szybszy i bardziej dynamiczny. Praca została wykonana na najwyższym poziomie, jestem bardzo zadowolony z rezultatu. Polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Piotr</div>
                        </div></div><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Zgłosiłem się na wykonanie tuningu Stage-1 w mojej Audi A4. Specjaliści wykonali świetną pracę, teraz samochód jeździ znacznie szybciej. Serwis na wysokim poziomie, doskonały wynik!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Tomasz</div>
                        </div></div><div class="owl-item cloned" style="width: 293.752px; margin-right: 10px;"><div class="rev-item" style="height: 240px;">
                            <div class="topPart">
                                <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/stars.png" alt=""></noscript>
                                <span class="rate">5</span>
                            </div>
                            <div class="revText">Wgrano Stage-1 do mojego BMW 320i. Po procedurze auto ma o wiele lepsze rozpędzanie oraz reakcję na gaz we wszystkich przedziałach obrotów silnika. Praca została wykonana szybko i profesjonalnie. Jestem bardzo zadowolony z rezultatu, polecam ten serwis!</div>
                            <div class="bottomPartRev"><img src="" alt=""> Michał</div>
                        </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><img data-src="https://kata-serwis.pl/wp-content/themes/kata/img/left.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img data-src='https://kata-serwis.pl/wp-content/themes/kata/img/left.svg' class='lazyload' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' /><noscript><img data-src='https://kata-serwis.pl/wp-content/themes/kata/img/left.svg' class='lazyload' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' /><noscript><img src='https://kata-serwis.pl/wp-content/themes/kata/img/left.svg' /></noscript></button><button type="button" role="presentation" class="owl-next"><img data-src="https://kata-serwis.pl/wp-content/themes/kata/img/right.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img data-src='https://kata-serwis.pl/wp-content/themes/kata/img/right.svg' class='lazyload' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' /><noscript><img data-src='https://kata-serwis.pl/wp-content/themes/kata/img/right.svg' class='lazyload' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' /><noscript><img src='https://kata-serwis.pl/wp-content/themes/kata/img/right.svg' /></noscript></button></div><div class="owl-dots disabled"></div></div>

                    <div style="margin-top: 24px; text-align: center;">
                        <a href="#leaveComment" type="submit" class="accBtn open-popup-link">
                                                         
                              Zostaw opinię
                                                        </a>
                    </div>
                </div>
            </div>
        </div>
    
</section>

<section>
    <div class="container-max">
    <div class="row">
    
                
      <div class="col-12"><h2>	        Adres</h2></div>
      <div class="col-12 avtoServicesList">
        <div class="row">
          <div class="col-md-4">
                      
            <a href="#" class="locationLink  active" data-city="Poznań" data-cordinates="52.43810322065663, 17.05732365455507" data-tel1="+48 799 356 010" data-tel2="" data-work="Pon. - Sob.: 08:00 — 19:00" data-free="Nd: Nie czynne" data-google="https://maps.app.goo.gl/hwWPPTwapphQJQqA6" data-wize="">
             <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" alt=""></noscript><span>Poznań, </span>Mikołaja Reja 13, 62-020 Swarzędz</a>
                       
            <a href="#" class="locationLink  " data-city="Warszawa" data-cordinates="52.18798144957036, 20.867937126988714" data-tel1="+48 799 355 737" data-tel2="" data-work="Pon. - Sob.: 08:00 — 19:00" data-free="Nd: Nie czynne" data-google="https://www.google.com/maps/dir/%D0%B2%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0/%D0%BA%D0%B8%D0%B5%D0%B2/@52.2006677,21.06268,9.19z/data=!4m13!4m12!1m5!1m1!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!2m2!1d21.0122287!2d52.2296756!1m5!1m1!1s0x40d4cf4ee15a4505:0x764931d2170146fe!2m2!1d30.5245025!2d50.4503596?entry=ttu&amp;g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" data-wize="">
             <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" alt=""></noscript><span>Warszawa, </span>Piastowska 19, 02-495 </a>
                       
            <a href="#" class="locationLink  " data-city="Gdańsk" data-cordinates="54.25494915152274, 18.673525098153497" data-tel1="+48 579 777 081" data-tel2="" data-work="Pon. - Sob.: 08:00 — 19:00" data-free="Nd: Nie czynne" data-google="https://www.google.com/maps/place/Powsta%C5%84cow+Warszawy+71,+83-000+Pruszcz+Gda%C5%84ski,+%D0%9F%D0%BE%D0%BB%D1%8C%D1%88%D0%B0/@54.2548238,18.6736002,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd703287e7e1bd:0x775859d1f939e2a5!8m2!3d54.2548238!4d18.6736002!16s%2Fg%2F11c1gs9ps8?entry=ttu&amp;g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" data-wize="">
             <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" alt=""></noscript><span>Gdańsk, </span>Sybiraków 11, 80-515</a>
                       
            <a href="#" class="locationLink  " data-city="Kraków" data-cordinates="50.09515353261661, 20.092067283729335" data-tel1="+48 579 771 066" data-tel2="" data-work="Pon. - Sob.: 08:00 — 19:00" data-free="Nd: Nie czynne" data-google="https://maps.app.goo.gl/PYR34M2q2UQQH4vb8" data-wize="">
             <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/location.svg" alt=""></noscript><span>Kraków, </span> Lubocka 90, 31-766</a>
                      
          </div>
        <div class="col-md-8"> 
          <div id="map" style="position: relative; overflow: hidden;"><div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"><div><button draggable="false" aria-label="Быстрые клавиши" title="Быстрые клавиши" type="button" style="background: none transparent; display: block; border: none; margin: 0px; padding: 0px; text-transform: none; appearance: none; position: absolute; cursor: pointer; user-select: none; z-index: 1000002; outline-offset: 3px; right: 0px; bottom: 0px; transform: translateX(100%);"></button></div><div tabindex="0" aria-label="Карта" aria-roledescription="карта" role="region" aria-describedby="A6992FDC-2968-4E7D-8602-2D1B821BB6A3" style="position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px;"><div id="A6992FDC-2968-4E7D-8602-2D1B821BB6A3" style="display: none;"><div class="LGLeeN-keyboard-shortcuts-view"><table><tbody><tr><td><kbd aria-label="Стрелка влево">←</kbd></td><td aria-label="Переместить влево.">Переместить влево</td></tr><tr><td><kbd aria-label="Стрелка вправо">→</kbd></td><td aria-label="Переместить вправо.">Переместить вправо</td></tr><tr><td><kbd aria-label="Стрелка вверх">↑</kbd></td><td aria-label="Переместить вверх.">Переместить вверх</td></tr><tr><td><kbd aria-label="Стрелка вниз">↓</kbd></td><td aria-label="Переместить вниз.">Переместить вниз</td></tr><tr><td><kbd>+</kbd></td><td aria-label="Приблизить.">Приблизить</td></tr><tr><td><kbd>-</kbd></td><td aria-label="Уменьшить.">Уменьшить</td></tr><tr><td><kbd>Home</kbd></td><td aria-label="Переместить влево на 75 %.">Переместить влево на 75 %</td></tr><tr><td><kbd>End</kbd></td><td aria-label="Переместить вправо на 75 %.">Переместить вправо на 75 %</td></tr><tr><td><kbd>Предыдущая страница</kbd></td><td aria-label="Переместить вверх на 75 %.">Переместить вверх на 75 %</td></tr><tr><td><kbd>Следующая страница</kbd></td><td aria-label="Переместить вниз на 75 %.">Переместить вниз на 75 %</td></tr></tbody></table></div></div></div><div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;"><div style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;"><div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; will-change: transform; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;"><div style="position: absolute; left: 0px; top: 0px; z-index: 0;"><div style="position: absolute; z-index: 984; transform: matrix(1, 0, 0, 1, -49, -89);"><div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div><div style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div></div></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;"><div style="position: absolute; left: 0px; top: 0px; z-index: -1;"><div style="position: absolute; z-index: 984; transform: matrix(1, 0, 0, 1, -49, -89);"><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 0px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: -256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: -256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: -256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 0px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 256px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 0px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: -256px;"></div></div></div><div style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -13px; top: -37px; z-index: 0;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 26px; height: 37px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 0;"><div style="position: absolute; z-index: 984; transform: matrix(1, 0, 0, 1, -49, -89);"><div style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35871!3i21518!4i256!2m3!1e0!2sm!3i758515954!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=80876" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35874!3i21516!4i256!2m3!1e0!2sm!3i758516338!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=122021" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35873!3i21516!4i256!2m3!1e0!2sm!3i758516338!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=113368" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35874!3i21517!4i256!2m3!1e0!2sm!3i758516338!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=46657" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35872!3i21516!4i256!2m3!1e0!2sm!3i758516338!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=104715" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35873!3i21517!4i256!2m3!1e0!2sm!3i758516338!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=38004" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35872!3i21518!4i256!2m3!1e0!2sm!3i758515954!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=89529" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35871!3i21516!4i256!2m3!1e0!2sm!3i758515954!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=100533" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35873!3i21518!4i256!2m3!1e0!2sm!3i758515954!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=98182" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35874!3i21518!4i256!2m3!1e0!2sm!3i758515954!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=106835" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35871!3i21517!4i256!2m3!1e0!2sm!3i758515954!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=25169" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear;"><img draggable="false" alt="" role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i35872!3i21517!4i256!2m3!1e0!2sm!3i758516338!3m18!2sru-RU!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwudC5mfHAuczozNnxwLmM6IzMzMzMzM3xwLmw6NDAscy5lOmwudC5zfHAudjpvbnxwLmM6I2ZmZmZmZnxwLmw6MTYscy5lOmwuaXxwLnY6b2ZmLHMudDoxfHMuZTpnLmZ8cC5jOiNmZWZlZmV8cC5sOjIwLHMudDoxfHMuZTpnLnN8cC5jOiNmZWZlZmV8cC5sOjE3fHAudzoxLjIscy50OjE5fHMuZTpsLml8cC5jOiNiZDA4MWMscy50OjV8cy5lOmd8cC5jOiNmNWY1ZjV8cC5sOjIwLHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMudDo0OXxzLmU6Zy5mfHAuYzojZmZmZmZmfHAubDoxNyxzLnQ6NDl8cy5lOmcuc3xwLmM6I2ZmZmZmZnxwLmw6Mjl8cC53OjAuMixzLnQ6NTB8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE4LHMudDo1MXxzLmU6Z3xwLmM6I2ZmZmZmZnxwLmw6MTYscy50OjR8cy5lOmd8cC5jOiNmMmYyZjJ8cC5sOjE5LHMudDo2fHMuZTpnfHAuYzojZTllOWU5fHAubDoxNyxzLnQ6NnxzLmU6Zy5mfHAudjpvbnxwLmM6I2UwYzFmMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750!23i47083502&amp;key=AIzaSyA2g32LYdtV-j2_aDL7Zgk-02WRPmGOfAg&amp;token=29351" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div></div></div></div><div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"><div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; will-change: transform; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"><slot></slot><span id="D780CD34-AE0B-403C-A224-3697AEEE81F6" aria-live="polite" style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0px; overflow: hidden; clip-path: inset(100%); white-space: nowrap; border: 0px;"></span><div aria-label="Kata" role="img" style="width: 26px; height: 37px; overflow: hidden; position: absolute; left: -13px; top: -37px; z-index: 0;" tabindex="-1"><img alt="" src="https://maps.gstatic.com/mapfiles/transparent.png" draggable="false" usemap="#gmimap0" style="width: 26px; height: 37px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"><map name="gmimap0" id="gmimap0"><area log="miw" coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5" shape="poly" tabindex="-1" title="Kata" style="display: inline; position: absolute; left: 0px; top: 0px; cursor: pointer; touch-action: none;"></map></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div></div></div><div class="gm-style-moc" style="z-index: 4; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; transition-property: opacity, display; transition-behavior: allow-discrete; opacity: 0; display: none;"><p class="gm-style-mot"></p></div></div><iframe aria-hidden="true" frameborder="0" tabindex="-1" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none; opacity: 0;"></iframe><div style="pointer-events: none; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 1000002; opacity: 0; border: 2px solid rgb(26, 115, 232);"></div><div></div><div></div><div></div><div></div><div><button draggable="false" aria-label="Включить полноэкранный режим" title="Включить полноэкранный режим" type="button" aria-pressed="false" class="gm-control-active gm-fullscreen-control" style="background: none rgb(255, 255, 255); border: 0px; margin: 10px; padding: 0px; text-transform: none; appearance: none; position: absolute; cursor: pointer; user-select: none; border-radius: 2px; height: 40px; width: 40px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; overflow: hidden; display: none; top: 0px; right: 0px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E" alt="" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E" alt="" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E" alt="" style="height: 18px; width: 18px;"></button></div><div></div><div></div><div></div><div></div><div></div><div><div style="margin: 0px 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"><a target="_blank" rel="noopener" title="Открыть эту область в Google Картах (в новом окне)" aria-label="Открыть эту область в Google Картах (в новом окне)" href="https://maps.google.com/maps?ll=52.438103,17.057324&amp;z=16&amp;t=m&amp;hl=ru-RU&amp;gl=US&amp;mapclient=apiv3" style="display: inline;"><div style="width: 66px; height: 26px;"><img alt="Google" src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.3%22%20fill%3D%22%23000%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39009%2024.8656%209.39009%2021.7783%209.39009%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2961%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39009%2035.7387%209.39009%2032.6513%209.39009%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22081v-.75H52.0788V20.4412H55.7387V5.22081z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868zM29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594zM40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594zM51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084zM54.9887%205.22081V19.6912H52.8288V5.22081H54.9887zM63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;"></div></a></div></div><div></div><div><div style="display: inline-flex; position: absolute; right: 0px; bottom: 0px;"><div class="gmnoprint" style="z-index: 1000001;"><div draggable="false" class="gm-style-cc" style="user-select: none; position: relative; height: 14px; line-height: 14px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><button draggable="false" aria-label="Быстрые клавиши" title="Быстрые клавиши" type="button" style="background: none; display: inline-block; border: 0px; margin: 0px; padding: 0px; text-transform: none; appearance: none; position: relative; cursor: pointer; user-select: none; color: rgb(0, 0, 0); font-family: inherit; line-height: inherit;">Быстрые клавиши</button></div></div></div><div class="gmnoprint" style="z-index: 1000001;"><div draggable="false" class="gm-style-cc" style="user-select: none; position: relative; height: 14px; line-height: 14px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><button draggable="false" aria-label="Картографические данные" title="Картографические данные" type="button" style="background: none; border: 0px; margin: 0px; padding: 0px; text-transform: none; appearance: none; position: relative; cursor: pointer; user-select: none; color: rgb(0, 0, 0); font-family: inherit; line-height: inherit; display: none;">Картографические данные</button><span style="">Картографические данные ©2025 Google</span></div></div></div><div class="gmnoscreen"><div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(0, 0, 0); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">Картографические данные ©2025 Google</div></div><button draggable="false" aria-label="Масштаб карты: 100&nbsp;м на 69 пкс" title="Масштаб карты: 100&nbsp;м на 69 пкс" type="button" class="gm-style-cc" aria-describedby="7FDD3D9B-5F00-49AD-8832-1BB80A78DA08" style="background: none; display: none; border: 0px; margin: 0px; padding: 0px; text-transform: none; appearance: none; position: relative; cursor: pointer; user-select: none; height: 14px; line-height: 14px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><span style="color: rgb(0, 0, 0);">100 м&nbsp;</span><div style="position: relative; display: inline-block; height: 8px; bottom: -1px; width: 73px;"><div style="width: 100%; height: 4px; position: absolute; left: 0px; top: 0px;"></div><div style="width: 4px; height: 8px; left: 0px; top: 0px;"></div><div style="width: 4px; height: 8px; position: absolute; right: 0px; bottom: 0px;"></div><div style="position: absolute; background-color: rgb(0, 0, 0); height: 2px; left: 1px; bottom: 1px; right: 1px;"></div><div style="position: absolute; width: 2px; height: 6px; left: 1px; top: 1px; background-color: rgb(0, 0, 0);"></div><div style="width: 2px; height: 6px; position: absolute; background-color: rgb(0, 0, 0); bottom: 1px; right: 1px;"></div></div></div><span id="7FDD3D9B-5F00-49AD-8832-1BB80A78DA08" style="display: none;">Нажимайте, чтобы переключаться между метрической и британской системами измерения.</span></button><div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; position: relative; height: 14px; line-height: 14px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a aria-label="Условия (ссылка откроется в новой вкладке)" href="https://www.google.com/intl/ru-RU_US/help/terms_maps.html" target="_blank" rel="noopener" style="text-decoration: none; cursor: pointer; color: rgb(0, 0, 0);">Условия</a></div></div><div draggable="false" class="gm-style-cc" style="user-select: none; position: relative; height: 14px; line-height: 14px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a target="_blank" rel="noopener" title="Сообщить об ошибке на карте или снимке" dir="ltr" href="https://www.google.com/maps/@52.4381032,17.0573237,16z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3" style="font-family: Roboto, Arial, sans-serif; font-size: 10px; text-decoration: none; position: relative; color: rgb(0, 0, 0);">Сообщить об ошибке на карте</a></div></div></div></div></div></div></div>
        </div>
        <div class="col-12">
          <div class="avtoServicesList_bottom">
            <div class="leftPart">
              <div class="as_block">
              	        <h3>Łączność</h3>                
                <!-- <a href="tel:+380671886383" id="tel_1"><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" alt=""></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript> <span>+380 67 188 63 83</span> </a>
                <a href="tel:+380505402984" id="tel_2"><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" alt=""></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript></noscript> <span>+380 50 540 29 84</span> </a> -->
                <a href="tel:+48799355737					">
					  <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" alt=""></noscript>
					<span itemprop="telephone">
					 +48 799 355 737											</span> 
				</a>
      			<a href="tel:+48799356010">
                   <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" alt=""></noscript>
					<span itemprop="telephone">
					 +48 799 356 010
					</span> 
            	</a>
                <a href="tel:+48579777081">
                   <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/tel.svg" alt=""></noscript>
					<span itemprop="telephone">
                        +48 579 777 081
					</span> 
            	</a>


              </div>
              <div class="as_block">
                	             <h3>Plan pracy</h3>               
                <div class="bottom_schedule">
                  <img alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/schedule.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/schedule.svg"><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/schedule.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/schedule.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img  alt="" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/schedule.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/schedule.svg" alt=""></noscript>
                  <p>
                    	                                        <span id="work">Pon. - Sob.: 08:00 - 19:00</span>
                        <span id="free">Niedziela: Dzień wolny</span>
                                       
                  </p>                  
                </div>
              </div>
            </div>
            <div class="rightPart">
            	              <h3>Wyznacz trasę</h3>             
              <div>
                <a href="https://maps.app.goo.gl/PYR34M2q2UQQH4vb8" class="accBtn" id="g_map"><img alt="" target="blank" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/wh-loc.svg" class=" ls-is-cached lazyloaded" src="https://kata-serwis.pl/wp-content/themes/kata/img/wh-loc.svg"><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/wh-loc.svg" alt="" target="blank"></noscript>  Google Maps</a>
                <!-- <a href="" class="accBtn" id="w-map"><img  alt="" target="blank" data-src="https://kata-serwis.pl/wp-content/themes/kata/img/waze.svg" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img src="https://kata-serwis.pl/wp-content/themes/kata/img/waze.svg" alt="" target="blank"></noscript> Через Waze</a> -->
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php endwhile; ?>


<script>
  document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("powerChart");
  const mtx = document.getElementById("momentChart");
  if (!ctx || !mtx) return; 

  const coefPower = +"<?php echo the_field('originpower'); ?>"
  const coefAfterPower = +"<?php echo the_field('aftertuning'); ?>"

  const momentorigin = +"<?php echo the_field('momentorigin'); ?>"
  const aftermoment = +"<?php echo the_field('aftermoment'); ?>"


  const rpm = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500];
  const persents = [0, 0.18, 0.45, 0.70, 0.80, 0.9, 0.95, 1, 0.96, 0.90, 0.70, 0]
  const powersArr = [0, 0.58, 0.85, 0.99, 0.89, 0.78, 0.72, .6, 0.54, 0.47, 0.40, 0]

    const powerBefore = persents.map((el, i) => {
                                        if(i === 0 || persents[persents.length-1]) return 0;
                                        return el * coefPower;
                                      })
    const powerAfter = persents.map((el, i) => {
                                        if(i === 0 || persents[persents.length-1]) return 0;
                                        return el * coefAfterPower;
                                      }) 
    const momentoriginArr = powersArr.map((el, i) => {
                                        if(i === 0 || powersArr[powersArr.length-1]) return 0;
                                        return el * momentorigin;
                                      }) 
    const aftermomentArr = powersArr.map((el, i) => {
                                        if(i === 0 || powersArr[powersArr.length-1]) return 0;
                                        return el * aftermoment;
                                      }) 

const baseFontSize = window.innerWidth < 768 ? 8 : 12;
Chart.defaults.font.size = baseFontSize;
Chart.defaults.devicePixelRatio = 2;
 new Chart(mtx, { 
    type: "line",
    data: {
      labels: rpm.map(r => `${r}`),
      datasets: [
        {
          label: "",
          data: momentoriginArr,
          fill: false,
          backgroundColor: "transparent",
          borderColor: "transparent",
          tension: 0.4,
        },
        {
          label: "",
          data: aftermomentArr,
          fill: false,
          backgroundColor: "transparent",
          borderColor: "transparent",
          
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: { position: "top" },
      },
      scales: {
        x: { title: { display: true, text: "Obroty silnika, obr/min" } },
        y: { title: { display: true, text: "Moment obrotowy, Nm" } },
      },
    },
  });
  new Chart(ctx, { 
    type: "line",
    data: {
      labels: rpm.map(r => `${r}`),
      datasets: [
        {
          label: "",
          data: powerBefore,
          fill: false,
          
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderColor: "#000",
          tension: 0.4,
        },
        {
          label: "",
          data: powerAfter,
          fill: false,
          backgroundColor: "rgba(255, 98, 0, 0.4)",
          borderColor: "#ff5100",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: { position: "top" },
      },
      scales: {
        x: { title: { display: true, text: "Obroty silnika, obr/min" } },
        y: { title: { display: true, text: "Moc, KM" } },
      },
    },
  });
});


</script>


<?php get_footer(); ?> 