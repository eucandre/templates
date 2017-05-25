function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  else {
    return false;
  }
}

function setSectionHeight() {
  page_height = $(window).height();
  $('.section').css('min-height', page_height);
}

function setMarginTopMenuScroll() {
  var search_input_offset_top = $('.search-input').offset().top;
  var margin_top_menu_scroll = $(window).height() - search_input_offset_top - 195;
  $('.menu-scroll').css('margin-top', margin_top_menu_scroll);
}

setMarginTopMenuScroll();

setSectionHeight();

$(window).resize(function() {
  setSectionHeight();
  setMarginTopMenuScroll();
});

var about_offset_top = $('.about').offset().top;

var is_mobile = isMobile();

if (is_mobile == true){
  $('.navbar').addClass('navbar-fixed-bottom');
}

$(document).bind('ready scroll', function() {
  var docScroll = $(document).scrollTop();

  if (is_mobile == false) {
    if (docScroll >= (about_offset_top - 50)) {
      $('.navbar').addClass('navbar-fixed-top');
      $('.about').css('padding-top', '100px');
    } else {
      $('.navbar').removeClass('navbar-fixed-top');
      $('.about').css('padding-top', '0px');
    }
  }
});

$('.scrolling').click(function(){
  var element = $(this).attr('href');
  if (page_height > 728) {
    var href = $(element).offset().top - 50;
  } else {
    var href = $(element).offset().top;
  }
  $('.navbar-collapse').collapse('hide');
  $.scrollTo(href, 800);
  return false;
});

function startIntro(){
  var intro = introJs();

  intro.setOptions({
    showStepNumbers: false,
    nextLabel: 'Avançar',
    prevLabel: 'Voltar',
    skipLabel: 'Pular',
    doneLabel: 'Sair',
    showProgress: true,
    steps: [
    {
      element: '.menu-top ul li:nth-child(1) a',
      intro: '<center>Conjunto de informações disponibilizadas no portal</center>',
      position: 'bottom'
    },
    {
      element: '.menu-top ul li:nth-child(2) a',
      intro: '<center>Departamentos ou instituições que atuam como fontes de informações para conjuntos de dados</center>',
      position: 'bottom'
    },
    {
      element: '.menu-top ul li:nth-child(3) a',
      intro: '<center>Assuntos que permitem agrupar dados</center>',
      position: 'bottom'
    },
    {
      element: '.menu-scroll ul li:nth-child(2) a',
      intro: '<center>Informações estatísticas sobre o Estado de Alagoas e seus municípios</center>',
      position: 'top'
    },
    {
      element: '.menu-scroll ul li:nth-child(3) a',
      intro: '<center>Informações geoespaciais sobre o Estado de Alagoas e seus municípios</center>',
      position: 'top'
    },
    {
      element: '.menu-scroll ul li:nth-child(4) a',
      intro: '<center>Conjunto de mapas do Estado de Alagoas e seus municípios</center>',
      position: 'top'
    },
    {
      element: '.menu-scroll ul li:nth-child(5) a',
      intro: '<center>Publicações socioeconômicas sobre o Estado de Alagoas e seus municípios</center>',
      position: 'top'
    },
    {
      element: '.menu-scroll ul li:nth-child(6) a',
      intro: '<center>Informações atualizadas sobre os últimos números estatísticos, mapas e notas técnicas</center>',
      position: 'top'
    },
    {
      element: '.menu-scroll ul li:nth-child(7) a',
      intro: '<center>Guia técnico para desenvolvedores, que desejam avaliar os passos necessários para conhecer e utilizar as ferramentas de acesso automatizado ao banco de dados e via API do CKAN</center>',
      position: 'top'
    },
    {
      element: '.menu-scroll ul li:nth-child(8) a',
      intro: '<center>É uma página de aplicativos criados a partir de dados e informações obtidas no portal</center>',
      position: 'top'
    },
    {
      element: '.search-input input',
      intro: '<center>Agora que você já conhece o portal, digite aqui o que você precisa saber sobre Alagoas?</center>',
      position: 'bottom'
    }
    ]
  });

  intro.start();
}

$(document).ready(function(){
  var placeholder_phrases = ["Publicações", "Economia", "Infraestrutura", "Urbanismo", "Trabalho", "Finanças", "Agropecuária, pesca e silvicultura", "Meio ambiente e recursos hídricos", "Geociências", "Caracterização territorial", "Gestão pública", "Turismo", "Educação", "Demografia", "Saúde", "Desenvolvimento social", "Segurança pública", "Tecnologia", "Ciência, tecnologia e Inovação", "Cultura e esporte", "Cidadania e direitos humanos"];
  var index = 0;
  function placeholderRefresher(){
    setTimeout(function(){
      $('.search-input input').attr('placeholder', placeholder_phrases[index]);
      if (index >= 20) {
        index = 0;
      } else {
        index++;
      }
      placeholderRefresher();
    }, 3000);
  }
  placeholderRefresher();
});