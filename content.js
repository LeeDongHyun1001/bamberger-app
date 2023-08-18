import { createStore } from "redux";

const burgerContents = [
    {
      "id": "1",
      "title": "맥도날드",
      "route": "/mcdonald",
      "img":"./img/mcdonald.png",
      "link":"https://www.mcdonalds.co.kr/kor/menu/list.do",
      "menu": [
        {
          "burgerMenu": "빅맥",
          "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727855319.png",
          "bugerDesc": "100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스. 안에서 살살 녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지"
        },
        {
            "burgerMenu": "더블 쿼터파운더 치즈",
            "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727501907.png",
            "bugerDesc": "1/4 파운드 비프 패티가 두 장 (226그램)! 육즙이 풍부한 고기 맛을 그대로 살린 100% 순 쇠고기 패티 두 장과 치즈 두 장이 입안 가득 완벽하게 조화"
        },
        {
          "burgerMenu": "쿼터파운더 치즈",
          "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583728200175.png",
          "bugerDesc": "쿼터파운더라는 이름에서 알 수 있듯이 두 배 이상 커진 1/4파운드(113그램) 비프와 부드러운 치즈 두 장의 환상궁합! 두툼한 순 쇠고기 패티와 신선한 치즈의 풍부한 맛"
        },
        {
            "burgerMenu": "맥크리스피 클래식 버거",
            "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1653436587840.png",
            "bugerDesc": "100% 통닭다리살 겉바속촉 케이준 치킨 패티! 치킨 버거 본연의 맛에 충실한 클래식 버거"
        },
        {
          "burgerMenu": "맥스파이시 상하이",
          "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583728352960.png",
          "bugerDesc": "매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에 아삭아삭한 양상추와 신선한 토마토~ 겉은 바삭, 속은 부드러운 치킨 패티의 매콤함"
        },
        {
            "burgerMenu": "맥치킨 모자렐라",
            "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727649835.png",
            "bugerDesc": "든든한 맥치킨에 골든 모짜렐라 치즈 스틱 2개와 매콤한 아라비아따 소스"
        },
        {
            "burgerMenu": "맥치킨",
            "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583730334543.png",
            "bugerDesc": "바삭한 치킨 패티, 고소한 화이트 마요 소스와 아삭한 양상추가 함께!"
        },
        {
          "burgerMenu": "1955버거",
          "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1599119647587.png",
          "bugerDesc": "두툼한 순 쇠고기 패티, 특별한 1955 소스에 깊은 풍미의 그릴드 어니언까지!"
        },
        {
          "burgerMenu": "불고기버거",
          "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727805044.png",
          "bugerDesc": "한국인의 입맛에 딱 맞는 불고기 소스에 잘 재운 패티와 고소한 마요네즈, 신선한 양상추의 맛있는 조합."
        },
        {
            "burgerMenu": "슈비 버거",
            "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727918778.png",
            "bugerDesc": "탱~글한 통새우살에 비프 패티를 더해 푸짐하게~ 슈비 버거"
        },
        {
            "burgerMenu": "베이컨 토마토 디럭스",
            "burgerImg": "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727707216.png",
            "bugerDesc": "두 장의 100% 순 쇠고기 패티에 그릴에 구워 더욱 고소한 1장의 베이컨을 얹고, 신선한 토마토와 양상추, 매콤달콤한 스위트 칠리 소스, 치즈, 마요네즈"
        }
      ]
    },
    { 
        "id": "2", 
        "title": "모스버거",
        "link":"http://www.moskorea.kr/",
        "route": "/mosburger",
        "img":"./img/mos.png",
        "menu": [
        {
            "burgerMenu": "그릴드 통 치킨버거",
            "burgerImg": "http://www.moskorea.kr/superboard/data/product/2001187538_Ej0aAPRx_01d86df323b868b802c138685f8db7a35b5042aa.png",
            "bugerDesc": "매~콤한 BBQ 풍미의 그릴드 통! 치킨패티에 신선한 모스의 야채를 다채롭게 담아 입 안 가득 만족감을 선사하는 프레쉬 치킨버거"
          },
          {
              "burgerMenu": "와규 치즈버거",
              "burgerImg": "http://www.moskorea.kr/superboard/data/product/2038875811_g0VCzk3o_f19aa7f29458b7e112c8badbad84eb7f2d7423d1.png",
              "bugerDesc": "100% 호주산 와규 패티에 멜팅 치즈, 볶은 양파, 특제 간장소스를 더한 프리미엄 버거"
          },
          {
            "burgerMenu": "스테이크베이컨 BBQ버거",
            "burgerImg": "http://www.moskorea.kr/superboard/data/product/2105756604_wGhHqdv3_7e72179ed68144b329c5af039170d154d7c87758.jpg",
            "bugerDesc": "두툼한 통베이컨에 BBQ소스, 할라피뇨의 알싸함이 들어간 버거"
          },
          {
              "burgerMenu": "리치 더블치즈버거",
              "burgerImg": "http://www.moskorea.kr/superboard/data/product/2105756604_y6QHDeF4_90a90af13e9702c026c345d45e5b97d223bd3417.jpg",
              "bugerDesc": "100% 호주산 소고기 패티 더블! 아메리칸 치즈 더블! 풍미 가득 볶은 양파까지  입안 가득 채우는 풍부한 맛의 버거"
          },
          {
            "burgerMenu": "모스버거",
            "burgerImg": "http://www.moskorea.kr/superboard/data/product/2105756604_M03wCA8n_ec4de1e94553bd4b6882aca1c189f91deba9e60e.jpg",
            "bugerDesc": "토마토∙양파∙소고기 등을 넣고 끓인 85℃ 특제 미트소스와 순소고기 패티의 일품인 버거"
          },
          {
              "burgerMenu": "크리스피 핫치킨버거",
              "burgerImg": "http://www.moskorea.kr/superboard/data/product/2001187538_WTLeY8cz_3c5d8910d23d971ab41652b0a7f9e389ad0cb4e9.png",
              "bugerDesc": "알싸~하고 매콤한 소스와 프레쉬한 야채, 두툼한 통 닭다리살이 만난 치킨버거"
          },
          {
              "burgerMenu": "골든 크리스피 치킨버거",
              "burgerImg": "http://www.moskorea.kr/superboard/data/product/2105756604_VE91odZb_1b5277bc0e3c31e41b25f974db97bde6e45f16b7.png",
              "bugerDesc": "맵.단.짠 골드시즈닝이 뿌려진 통닭다리살 패티에 크림치즈, 고구마무스가 만난 프리미엄 치킨버거"
          },
          {
            "burgerMenu": "블랙페퍼 치킨버거",
            "burgerImg": "http://www.moskorea.kr/superboard/data/product/2038875811_1upOYMeI_434ab82d1dab4788b4fef5b713dddccffcf9fc67.jpg",
            "bugerDesc": "통후추, 통닭다리살, 통하는 맛! 갓 튀겨낸 블랙페퍼치킨과 달콤고소 어니언 크림소스가 어우러진 버거"
          },
          {
            "burgerMenu": "모스 시그니처 치킨버거",
            "burgerImg": "http://www.moskorea.kr/superboard/data/product/2105756604_YBzoPvc9_427525870a74f119f5d2848889c12fd4386f8a01.png",
            "bugerDesc": "모스만의 단.짠 시그니처 간장 소스에 퐁당 빠진 매콤 바삭 통 닭다리살 패티! 신선한 야채와 새콤달콤 마요네즈 소스까지 만난 환상적 조화!"
          },
          {
              "burgerMenu": "새우카츠버거",
              "burgerImg": "http://www.moskorea.kr/superboard/data/product/2105756604_PQbcu8IN_faa1b4abcf6766ee446deb2b1bcfe8a86e5a8f29.jpg",
              "bugerDesc": "바삭하게 튀겨낸 탱탱한 새우의 식감이 풍부하게 느껴지는 버거"
          },
          {
            "burgerMenu": "어메이징 쉬림프버거",
            "burgerImg": "http://www.moskorea.kr/superboard/data/product/2001187538_LFXebOQk_0fe6955831e53b5a73360899777681f178c90993.png",
            "bugerDesc": "바삭! 탱글! 통 새우와 통 버터플라이 쉬림프를 더블로! 매콤한 살사소스와 부드러운 아보카도 페스토의 어메이징한 맛의 조화"
          },
          {
              "burgerMenu": "불고기버거",
              "burgerImg": "http://www.moskorea.kr/superboard/data/product/2038947096_v4Sm83i5_d0d9bc9a781687b850ed88bf2c22ba43114a85c4.png",
              "bugerDesc": "불고기 소스를 듬뿍 바른 순소고기 패티에 신선한 양상추와 마요네즈를 얹은 버거"
          }
        ] 
    },
    { 
        "id": "3", 
        "title": "버거킹",
        "link":"https://www.burgerking.co.kr/#/home",
        "route": "/burgerking",
        "img":"./img/bugerKing.png",
        "menu": [
        {
            "burgerMenu": "블랙바비큐와퍼",
            "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/746699c8-ea24-40d6-a522-b2a92e4e42f2.png",
            "bugerDesc": "블랙번과 바비큐 소스의 풍미!"
          },
          {
              "burgerMenu": "블랙바비큐콰트로치즈와퍼",
              "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/57a9310f-10df-4b41-a74e-92b481cf58c2.png",
              "bugerDesc": "콰트로치즈와퍼가 바비큐소스를 만나다!"
          },
          {
            "burgerMenu": "몬스터와퍼",
            "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/36a448ae-7680-4779-8fac-f1961ef2a32e.png",
            "bugerDesc": "불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛"
          },
          {
              "burgerMenu": "몬스터X",
              "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/fe9bd4a0-87e0-4be6-8523-6dfd861ed9c7.png",
              "bugerDesc": "부드러운 호밀 브리오슈 번, 두툼한 스테이크 패티, 디아블로 소스의 압도적인 맛"
          },
          {
            "burgerMenu": "통새우와퍼",
            "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c264b9fe-45db-4b8f-ac47-305f43974257.png",
            "bugerDesc": "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거"
          },
          {
              "burgerMenu": "갈릭불고기와퍼",
              "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/474ae803-54c6-4446-8ad0-bbbf6e04c237.png",
              "bugerDesc": ""
          },
          {
              "burgerMenu": "치즈와퍼",
              "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/30db9ce6-3a24-4050-9090-a2decebc03ce.png",
              "bugerDesc": "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지"
          },
          {
            "burgerMenu": "콰트로치즈와퍼",
            "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e1b6ba7d-e095-4bc7-9453-ec42e818b248.png",
            "bugerDesc": "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!"
          },
          {
            "burgerMenu": "와퍼",
            "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e5056796-c8a8-4842-9d55-8b2d98e6a9c6.png",
            "bugerDesc": "불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!"
          },
          {
              "burgerMenu": "비프&슈림프버거",
              "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/6ac60d65-757e-46a6-ab1f-fd8b49cd79f6.png",
              "bugerDesc": "불맛가득 순쇠고기 패티에 새콤달콤 루피 특제소스 듬뿍!"
          },
          {
            "burgerMenu": "롱치킨버거",
            "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/27ba8426-b1a7-4823-9565-4e87eb6c1d5a.png",
            "bugerDesc": "담백한 치킨 패티에 부드러운 마요네즈 소스와 싱싱한 야채가 듬뿍~"
          },
          {
              "burgerMenu": "치킨버거",
              "burgerImg": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/f337fb53-34c3-4d33-b45b-780c32832104.png",
              "bugerDesc": "부드러운 에그번과 킹치킨패티의 만남! 풍부한 마요 소스로 고소하게"
          }
        ] 
    },
    { 
        "id": "4", 
        "title": "KFC",
        "link":"https://www.kfckorea.com/", 
        "route": "/kfc",
        "img":"./img/kfc.png",
        "menu": [
            {
                "burgerMenu": "더블치즈타워버거",
                "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249118_20230131172941918.png",
                "bugerDesc": "슬라이스 치즈가 더블! 닭가슴살필렛과 해시브라운, 베이컨으로 높이 쌓은 프리미엄 타워버거"
              },
              {
                  "burgerMenu": "징거더블다운맥스",
                  "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249117_20230131170902440.png",
                  "bugerDesc": "Only meat 치킨 통살로만 구성된 Real 치킨통살버거"
              },
              {
                "burgerMenu": "징거BLT버거",
                "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249121_20230131175039544.png",
                "bugerDesc": "닭가슴살필렛과 상큼한 토마토, 아삭한 양상추, 치즈와 베이컨이 어우러진 프리미엄 징거버거"
              },
              {
                  "burgerMenu": "타워버거",
                  "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249122_20230131175906956.png",
                  "bugerDesc": "두툼한 통가슴살 필렛과 해시브라운, 슬라이스 치즈까지 KFC 시그니처 버거"
              },
              {
                "burgerMenu": "핫치즈징거버거",
                "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249124_20230131182510395.png",
                "bugerDesc": "두툼한 통가슴살 패티에 매콤한 살사소스와 할라피뇨치즈소스의 만남!"
              },
              {
                  "burgerMenu": "징거버거",
                  "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249126_20230131182918680.png",
                  "bugerDesc": "더 커진 닭가슴살필렛과 상큼한 토마토가 어우러진 대표 치킨버거"
              },
              {
                  "burgerMenu": "불고기버거",
                  "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249128_20230131185546782.png",
                  "bugerDesc": "달콤한 불고기 소스와 부드러운 패티로 더 맛있어진 불고기버거"
              },
              {
                "burgerMenu": "캡새버거",
                "burgerImg": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1249129_20230131190413418.png",
                "bugerDesc": "탱글탱글한 새우살이 콕콕 그 새우버거가 KFC에서 더 맛있게 나왔새우"
              }
        ] 
    },
    { 
        "id": "5", 
        "title": "맘스터치",
        "link":"https://momstouch.co.kr/",
        "route": "/momstouch",
        "img":"./img/moms.png",
        "menu": [
            {
                "burgerMenu": "골든맥앤치즈비프버거",
                "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1687141551-XNIXI.png",
                "bugerDesc": "풍미 가득 순쇠고기 패티와 진한 골든맥앤치즈, 매콤한 치폴레소스까지"
              },
              {
                  "burgerMenu": "아라비아따치즈버거",
                  "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1674626662-ITQZP.png",
                  "bugerDesc": "고소한 통모짜렐라 치즈패티 & 부드러운 통닭다리살 & 매콤한 아라비아따소스가 선보이는 환상적인 조화!"
              },
              {
                "burgerMenu": "오리지널미트볼버거",
                "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1669681037-KEAIG.png",
                "bugerDesc": "육즙 가득한 미트볼과 치킨패티 그리고 진한 블랙페퍼소스의 환상적인 조화!"
              },
              {
                  "burgerMenu": "야채통통치킨버거",
                  "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1663630773-JQZAP.png",
                  "bugerDesc": "국내산 야채로 만든 통통한 야채튀김과 진한 간장소스의 부드러운 닭다리살 패티가 조화로운 스페셜 버거"
              },
              {
                "burgerMenu": "갈릭바베큐치킨 버거",
                "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1668411709-LIXWX.png",
                "bugerDesc": "스모키한 바베큐소스와 은은한 마늘향의 화이트갈릭소스의 환성적인 조화"
              },
              {
                  "burgerMenu": "쉬림프싸이플렉스버거",
                  "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1647845660-MZBRZ.png",
                  "bugerDesc": "타르타르소스까지 더한 새로운 입찢버거로 FLEX!"
              },
              {
                  "burgerMenu": "딥치즈싸이버거",
                  "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1647845468-DPBRA.png",
                  "bugerDesc": "진한 치즈소스와 통다리살 패티가 일품"
              },
              {
                "burgerMenu": "화이트갈릭싸이버거",
                "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1647844626-SKNGP.png",
                "bugerDesc": "더블햄, 통다리살, 화이트갈릭소스의 환상 조합"
              },
              {
                "burgerMenu": "싸이버거",
                "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1616055241-EYPWG.png",
                "bugerDesc": "바삭하고 매콤한 치킨 패티와 신선한 양상추가 조화를 이루는 맘스터치 시그니처 버거."
              },
              {
                  "burgerMenu": "불싸이버거",
                  "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1616055291-RNIEC.png",
                  "bugerDesc": "화끈한 불맛이 살아있는 버거, 싸이버거의 매운맛 버전."
              },
              {
                "burgerMenu": "인크레더블버거",
                "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1616055398-ZHVMP.png",
                "bugerDesc": "프리미엄 더블햄, 에그프라이, 통다리살 패티에 아삭아삭한 양상추와 양파까지, 풍성한 버거."
              },
              {
                  "burgerMenu": "언빌리버블버거",
                  "burgerImg": "https://momstouch.co.kr/upload_file/product_info/1616055649-ICSFA.png",
                  "bugerDesc": "통새우, 에그프라이, 통가슴살 패티에 매콤한 스리라차 마요 소스를 더한 대확행 버거."
              }
            ] 
    },
    { 
        "id": "6",
        "title": "롯데리아",
        "link":"https://www.lotteeatz.com/brand/ria",
        "route": "/lottelia",
        "img":"./img/lotte.png",
        "menu": [
            {
                "burgerMenu": "불고기 익스트림",
                "burgerImg": "https://img.lotteeatz.com/upload/product/2023/07/12/20230712163733781_2.png",
                "bugerDesc": "롯데리아 불고기에는 한계란 없다! 대표제품과 이슈제품의 만남, 불고기버거X매콤한오징어버거"
              },
              {
                  "burgerMenu": "힙&합치킨버거",
                  "burgerImg": "https://img.lotteeatz.com/upload/product/2023/06/21/20230621174953870_1.png",
                  "bugerDesc": "바삭한 치킨패티와 매콤한 양념소스, 아삭한 적채당근피클로 식감과 풍미를 더한 치킨버거"
              },
              {
                "burgerMenu": "한우불고기",
                "burgerImg": "https://img.lotteeatz.com/upload/product/2023/02/10/20230210102118259_1.png",
                "bugerDesc": "브리오쉬번에 국내산 한우를 사용한 패티, 신선한 야채, 특제소스로 완성한 프리미엄 햄버거"
              },
              {
                  "burgerMenu": "불고기버거",
                  "burgerImg": "https://img.lotteeatz.com/upload/product/2021/07/23/20210723103917912_2.png",
                  "bugerDesc": "두툼한 쇠고기패티와 한국적인 맛의 소스가 잘 조화된 롯데리아 대표 버거"
              },
              {
                "burgerMenu": "모짜렐라 인 더 버거 베이컨",
                "burgerImg": "https://img.lotteeatz.com/upload/product/2023/03/08/20230308094308298_4.png",
                "bugerDesc": "자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거"
              },
              {
                  "burgerMenu": "DobuleX2",
                  "burgerImg": "https://img.lotteeatz.com/upload/product/2020/08/03/20200803175039962_2.png",
                  "bugerDesc": "비프패티2장, 치즈2장으로 깊고 풍부한맛의 정통 아메리칸버거"
              },
              {
                  "burgerMenu": "새우버거",
                  "burgerImg": "https://img.lotteeatz.com/upload/product/2019/12/20/20191220163836176_9.png",
                  "bugerDesc": "새우살을 가득넣어 더 맛있어진 오리지널 새우버거"
              },
              {
                "burgerMenu": "리아미라클 Ⅱ",
                "burgerImg": "https://img.lotteeatz.com/upload/product/2023/06/29/20230629174939232_1.png",
                "bugerDesc": "100% 식물성 패티와 신선한 야채들이 조화된 대체육버거"
              },
              {
                "burgerMenu": "핫크리스피버거",
                "burgerImg": "https://img.lotteeatz.com/upload/product/2023/06/21/20230621174724947_5.png",
                "bugerDesc": "닭가슴살 패티로 만든 매콤 화끈한 프리미엄 치킨버거"
              },
              {
                  "burgerMenu": "T-REX",
                  "burgerImg": "https://img.lotteeatz.com/upload/product/2020/08/03/20200803174706238_6.png",
                  "bugerDesc": "빵보다 큰 쫄깃한 통닭다리살 패티와 부드러운 크림 소스의 만남"
              },
              {
                "burgerMenu": "데리버거",
                "burgerImg": "https://img.lotteeatz.com/upload/product/2020/01/02/20200102234537645_5.png",
                "bugerDesc": "쇠고기패티에 달콤 짭짤한 데리소스를 더한 가성비 버거"
              },
              {
                  "burgerMenu": "치킨버거",
                  "burgerImg": "https://img.lotteeatz.com/upload/product/2019/12/20/20191220163929389_1.png",
                  "bugerDesc": "닭고기패티와 데리야끼 소스로 만든 담백하고 달콤한 맛의 치킨버거"
              }
            ] 
    },
    { 
        "id": "7",
        "title": "뉴욕버거",
        "link":"https://newyorkburger.co.kr/bbs/bbs/board.php?bo_table=m22",
        "route": "/newyorkburger",
        "img":"./img/newyork.png",
        "menu": [
            {
                "burgerMenu": "뉴욕버거",
                "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/fa754ceed5fe9fd871249c0668c6b7e8_hO7CLP9o_c62745350cb9f2015cdd61f41f02bcb922ebebf0.jpg",
                "bugerDesc": "육즙이 풍부한 폭풍식감! 대표 시그니처 수제버거!"
              },
              {
                  "burgerMenu": "치킹버거(칠리)",
                  "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/fa754ceed5fe9fd871249c0668c6b7e8_8CibmQTz_f757dd0bd4ba4b0045246e9adf76b0699e362264.jpg",
                  "bugerDesc": "푸짐한 통닭다리살과 매콤달콤한 특제소스의 조화! 치킨버거의 왕!"
              },
              {
                "burgerMenu": "치킹버거(갈릭)",
                "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/fa754ceed5fe9fd871249c0668c6b7e8_KjpWHdua_433c3f06bfb087ffd1a973d3c646d7669d77cc33.jpg",
                "bugerDesc": "푸짐한 통닭다리살과 특제소스의 꿀조합! 치킨버거의 왕!"
              },
              {
                  "burgerMenu": "통새우버거",
                  "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/fa754ceed5fe9fd871249c0668c6b7e8_Hsn9y2SD_9b2c78e30bb830ea4495baaff98436024d8743fc.jpg",
                  "bugerDesc": "통통터지는 통새우살이 한 가득 들어있다! 진짜 새우버거!"
              },
              {
                "burgerMenu": "리얼딥치즈버거",
                "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_0mPkp7O1_7903e3a9e477342e5fef8e7e5508dcc9a16f65f0.jpg",
                "bugerDesc": "체다치즈와 고다치즈가 만났다! 리얼딥치즈버거!"
              },
              {
                  "burgerMenu": "뚱카츠버거",
                  "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_1NoMTXDF_a963b0ae69d909e726ee00f8bbf808b8e23b793a.jpg",
                  "bugerDesc": "뚱뚱한 카츠패티와 와사비소스의 조합!"
              },
              {
                  "burgerMenu": "바베큐버거",
                  "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_zgZOKxB7_f5bcf4d349f0b5ba9d9efe72666cfb57b198f429.jpg",
                  "bugerDesc": "뉴욕버거만의 소스와 패티 육즙이 만들어낸 맛있는 수제버거"
              },
              {
                "burgerMenu": "치아바타머쉬룸버거",
                "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_vMBdZVk3_45d54231e34492b7a88801c585ac4e88969f8304.jpg",
                "bugerDesc": "고기인가 버섯인가! '버섯향이 입안에 가득!' 풍미 가득 머쉬룸버거"
              },
              {
                "burgerMenu": "비프불고기버거",
                "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_7N3bv4os_116177df33287c84ce810163ad8f1df71414d9d0.jpg",
                "bugerDesc": "냉장패티와 불고기 소스가 서로 어우러진 한국 전통의 맛!"
              },
              {
                  "burgerMenu": "포테이토치킨버거",
                  "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_WdAsbPeo_202bf745e7a19320497314dfc38fbda6bd788bdb.jpg",
                  "bugerDesc": "남녀노소 누구나 좋아하는 해쉬브라운과 바삭한 치킨패티가 만났다!"
              },
              {
                "burgerMenu": "더블스테이크버거",
                "burgerImg": "https://newyorkburger.co.kr/bbs/data/file/m22/f09584dc1fc5153a34e83353e5a1fd4a_q1QvXemc_9efaf380df63f8635a58985fe153fdcb287796eb.jpg",
                "bugerDesc": "2장의 패티로 맛이 2배! 소고기 패티로 육즙 UP!"
              }
            ] 
    },
    { 
        "id": "8",
        "title": "노브랜드버거",
        "link":"https://www.shinsegaefood.com/nobrandburger/menu/menu.sf",
        "route": "/nobrandburger",
        "img":"./img/nobrand.png",
        "menu": [
            {
              "burgerMenu": "페퍼로니피자 치킨",
              "burgerImg": "https://www.shinsegaefood.com/uimages/2023/07/14/%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88%ED%94%BC%EC%9E%90_%EC%B9%98%ED%82%A8.png",
              "bugerDesc": "페퍼로니 토핑 번과 바삭한 치킨패티로 피자, 치킨, 버거의 완벽한 밸런스를 즐길 수 있는 버거"
            },
            {
                "burgerMenu": "치폴레 핫 치킨",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2023/03/16/%EC%B9%98%ED%8F%B4%EB%A0%88_%ED%95%AB_%EC%B9%98%ED%82%A8.png",
                "bugerDesc": "매콤한 치킨 패티에 치폴레소스가 더해진 크리스피 핫 치킨 버거"
            },
            {
              "burgerMenu": "투머치 베이컨",
              "burgerImg": "https://www.shinsegaefood.com/uimages/2023/01/19/%ED%88%AC%EB%A8%B8%EC%B9%98_%EB%B2%A0%EC%9D%B4%EC%BB%A8.png",
              "bugerDesc": "베이컨 3장과 치즈 2장으로 압도적으로 풍성한 투머치 베이컨"
            },
            {
                "burgerMenu": "콰트로 맥앤치즈",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2022/11/15/%EC%BD%B0%ED%8A%B8%EB%A1%9C_%EB%A7%A5%EC%95%A4%EC%B9%98%EC%A6%88.png",
                "bugerDesc": "네가지 치즈로 더욱 꾸덕하고 찐한 콰트로 맥앤치즈 버거"
            },
            {
              "burgerMenu": "더블치즈 베이컨 시그니쳐",
              "burgerImg": "https://www.shinsegaefood.com/uimages/2022/04/20/%EB%8D%94%EB%B8%94%EC%B9%98%EC%A6%88_%EB%B2%A0%EC%9D%B4%EC%BB%A8_%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98(1).png",
              "bugerDesc": "베이컨과 더블치즈가 만나 스모크한 풍미와 고소함이 더해진 아메리칸 클래식 버거"
            },
            {
                "burgerMenu": "갈릭앤갈릭",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2021/10/05/%EA%B0%88%EB%A6%AD%EC%95%A4%EA%B0%88%EB%A6%AD%EB%B2%84%EA%B1%B0_460x270.png",
                "bugerDesc": "갈릭칩과 갈릭소스로 진한 갈릭의 풍미가 2배인 버거"
            },
            {
                "burgerMenu": "코울슬로 치킨",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2023/03/16/%EC%BD%94%EC%9A%B8%EC%8A%AC%EB%A1%9C_%EC%B9%98%ED%82%A8.png",
                "bugerDesc": "아삭한 식감이 살아있는 달콤한 코울슬로와 바삭하게 튀긴 통가슴살 치킨 패티가 어우러진 버거"
            },
            {
              "burgerMenu": "NBB 오리지널",
              "burgerImg": "https://www.shinsegaefood.com/uimages/2019/09/20/NBB%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90(2).png",
              "bugerDesc": "직화로 구워낸 두툼한 미트 패티에 신선한 양상추와 토마토, NBB 특제 버거 소스"
            },
            {
              "burgerMenu": "NBB 어메이징",
              "burgerImg": "https://www.shinsegaefood.com/uimages/2019/09/20/NBB%EC%96%B4%EB%A9%94%EC%9D%B4%EC%A7%95(2).png",
              "bugerDesc": "더블 패티 & 더블 치즈, 어메이징한 크기의 NBB 어메이징 버거"
            },
            {
                "burgerMenu": "NBB 시그니처",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2019/09/20/NBB%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98(1).png",
                "bugerDesc": "직화로 불맛을 살린 두툼한 미트 패티에 진한 치즈를 얹어 깊은 맛을 선사하는 치즈버거"
            },
            {
              "burgerMenu": "미트 마니아",
              "burgerImg": "https://www.shinsegaefood.com/uimages/2019/09/20/%EB%AF%B8%ED%8A%B8%EB%A7%88%EB%8B%88%EC%95%84.png",
              "bugerDesc": "더블 패티와 더블 치즈, 고급스러운 트러플 핫 페퍼 소스에 계란후라이까지 든든한 버거"
            },
            {
                "burgerMenu": "그릴드 불고기",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2019/09/20/%EA%B7%B8%EB%A6%B4%EB%93%9C%EB%B6%88%EA%B3%A0%EA%B8%B0.png",
                "bugerDesc": "직화 미트 패티에 한국인이 가장 좋아하는 불고기 소스를 더한 NBB 최고 가성비 버거"
            },
            {
                "burgerMenu": "메가바이트",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2019/09/20/%EB%A9%94%EA%B0%80%EB%B0%94%EC%9D%B4%ED%8A%B8.png",
                "bugerDesc": "두툼한  직화 미트 패티에 바삭 해쉬브라운이 더해져 색다른 식감과 풍성한 양을 자랑하는 버거"
            },
            {
                "burgerMenu": "스리라차 치킨",
                "burgerImg": "https://www.shinsegaefood.com/uimages/2023/03/16/%EC%8A%A4%EB%A6%AC%EB%9D%BC%EC%B0%A8_%EC%B9%98%ED%82%A8.png",
                "bugerDesc": "매콤한 태국식 스리라차에 달콤함을 더한 스페셜 소스와 바삭하게 튀긴 통가슴살 치킨 패티가 어우러진 버거"
            }
          ] 
    },
    { 
        "id": "9",
        "title": "프랭크버거",
        "link" : "https://frankburger.co.kr/html/menu_1.html",
        "route": "/frankburger",
        "img":"./img/frank.png",
        "menu": [
          {
            "burgerMenu": "SG불고기 버거",
            "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img11.jpg",
            "bugerDesc": "SG 수제패티 위에 불고기 특제 소스로 깊은 육향을 느낄 수 있는 버거"
          },
          {
              "burgerMenu": "SG크림 치즈버거",
              "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img12.jpg",
              "bugerDesc": "매콤한 치킨 패티에 치폴레소스가 더해진 크리스피 핫 치킨 버거"
          },
          {
            "burgerMenu": "프랭크 버거",
            "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img1.jpg",
            "bugerDesc": "베이컨 3장과 치즈 2장으로 압도적으로 풍성한 투머치 베이컨"
          },
          {
              "burgerMenu": "치즈버거",
              "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img2.jpg",
              "bugerDesc": "네가지 치즈로 더욱 꾸덕하고 찐한 콰트로 맥앤치즈 버거"
          },
          {
            "burgerMenu": "베이컨 치즈버거",
            "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img3.jpg",
            "bugerDesc": "베이컨과 더블치즈가 만나 스모크한 풍미와 고소함이 더해진 아메리칸 클래식 버거"
          },
          {
              "burgerMenu": "더블 치즈버거",
              "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img4.jpg",
              "bugerDesc": "갈릭칩과 갈릭소스로 진한 갈릭의 풍미가 2배인 버거"
          },
          {
              "burgerMenu": "쉬림프 버거",
              "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img5.jpg",
              "bugerDesc": "아삭한 식감이 살아있는 달콤한 코울슬로와 바삭하게 튀긴 통가슴살 치킨 패티가 어우러진 버거"
          },
          {
            "burgerMenu": "머쉬룸 버거",
            "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img6.jpg",
            "bugerDesc": "직화로 구워낸 두툼한 미트 패티에 신선한 양상추와 토마토, NBB 특제 버거 소스"
          },
          {
            "burgerMenu": "JG버거",
            "burgerImg": "https://frankburger.co.kr/img/page/2022_menu/01/menu1_img7.jpg",
            "bugerDesc": "더블 패티 & 더블 치즈, 어메이징한 크기의 NBB 어메이징 버거"
          }
        ]
    }
  ]

function reducer(state, action){
    return {burgerContents};
}

export const bugerStore = createStore(reducer);