import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StatusBar, ActivityIndicator, ImageBackground, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import Slider from '../components/Slider'
import Interpreter from '../components/Interpreter'


import { latest, infoMovie } from '../services/index'
import { Icon } from 'react-native-eva-icons';


function Dashboard() {
  const [Load, setLoad] = useState(true);
  const [Data, setData] = useState({});

  useEffect(() => {
    Get()
  }, [])


  async function Get() {
    const get = await infoMovie(550)
    setData(get)
    setLoad(false);
  }


  console.log("DataDataDataDataDataData", Data)


  //   {
  //   "adult": false,
  //   "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
  //   "belongs_to_collection": null,
  //   "budget": 63000000,
  //   "genres": [{"id": 18, "name": "Drama"}],
  //   "homepage": "http://www.foxmovies.com/movies/fight-club",
  //   "id": 550,
  //   "imdb_id": "tt0137523",
  //   "original_language": "en",
  //   "original_title": "Fight Club",
  //   "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  //   "popularity": 46.544,
  //   "poster_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
  //   "production_companies": [
  //     {"id": 508,"logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png", "name": "Regency Enterprises", "origin_country": "US"},
  //     {"id": 711, "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png", "name": "Fox 2000 Pictures", "origin_country": "US"},
  //     {"id": 20555, "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png", "name": "Taurus Film", "origin_country": "DE"},
  //     {"id": 54051, "logo_path": null, "name": "Atman Entertainment", "origin_country": ""},
  //     {"id": 54052, "logo_path": null, "name": "Knickerbocker Films", "origin_country": "US"},
  //     {"id": 25, "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png", "name": "20th Century Fox", "origin_country": "US"},
  //     {"id": 4700, "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png", "name": "The Linson Company", "origin_country": "US"}
  //   ],
  //   "production_countries": [
  //     {"iso_3166_1": "DE", "name": "Germany"},
  //     {"iso_3166_1": "US", "name": "United States of America"}
  //   ],
  //   "release_date": "1999-10-15",
  //   "revenue": 100853753,
  //   "runtime": 139,
  //   "spoken_languages": [{"english_name": "English", "iso_639_1": "en", "name": "English"}],
  //   "status": "Released",
  //   "tagline": "Mischief. Mayhem. Soap.",
  //   "title": "Fight Club",
  //   "video": false,
  //   "vote_average": 8.4,
  //   "vote_count": 22392
  // }




  // {
  //   "adult": false,
  //   "backdrop_path": "/Aggp8HKlt9MuA3cagoOk7Gp5yI4.jpg",
  //   "belongs_to_collection": {
  //     "id": 328,
  //     "name": "Jurassic Park Collection",
  //     "poster_path": "/qIm2nHXLpBBdMxi8dvfrnDkBUDh.jpg",
  //     "backdrop_path": "/njFixYzIxX8jsn6KMSEtAzi4avi.jpg"
  //   },
  //   "budget": 73000000,
  //   "genres": [
  //     {
  //       "id": 12,
  //       "name": "Adventure"
  //     },
  //     {
  //       "id": 28,
  //       "name": "Action"
  //     },
  //     {
  //       "id": 878,
  //       "name": "Science Fiction"
  //     }
  //   ],
  //   "homepage": "",
  //   "id": 330,
  //   "imdb_id": "tt0119567",
  //   "original_language": "en",
  //   "original_title": "The Lost World: Jurassic Park",
  //   "overview": "Four years after Jurassic Park's genetically bred dinosaurs ran amok, multimillionaire John Hammond shocks chaos theorist Ian Malcolm by revealing that he has been breeding more beasties at a secret location. Malcolm, his paleontologist ladylove and a wildlife videographer join an expedition to document the lethal lizards' natural behavior in this action-packed thriller.",
  //   "popularity": 2.836,
  //   "poster_path": "/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg",
  //   "production_companies": [
  //     {
  //       "id": 33,
  //       "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
  //       "name": "Universal Pictures",
  //       "origin_country": "US"
  //     },
  //     {
  //       "id": 56,
  //       "logo_path": "/cEaxANEisCqeEoRvODv2dO1I0iI.png",
  //       "name": "Amblin Entertainment",
  //       "origin_country": "US"
  //     },
  //     {
  //       "id": 76068,
  //       "logo_path": null,
  //       "name": "Digital Image Associates",
  //       "origin_country": ""
  //     }
  //   ],
  //   "production_countries": [
  //     {
  //       "iso_3166_1": "US",
  //       "name": "United States of America"
  //     }
  //   ],
  //   "release_date": "1997-05-23",
  //   "revenue": 618638999,
  //   "runtime": 129,
  //   "spoken_languages": [
  //     {
  //       "english_name": "English",
  //       "iso_639_1": "en",
  //       "name": "English"
  //     }
  //   ],
  //   "status": "Released",
  //   "tagline": "Something has survived.",
  //   "title": "The Lost World: Jurassic Park",
  //   "video": false,
  //   "vote_average": 6.5,
  //   "vote_count": 6367
  // }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2C3848" }}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />




      {Load === true ?
        <ActivityIndicator color={"white"} size={60} style={{ marginTop: "100%" }} />
        :
        <>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", top: 40, position: "absolute", zIndex: 2, paddingHorizontal: 25 }}>
            <Icon name='arrow-back-outline' width={25} height={25} fill={"white"} />
            <Icon name='heart' width={25} height={25} fill={"white"} />
            {/* <Icon name='heart-outline' width={25} height={25} fill={"white"} /> */}
          </View>
          <Image style={styles.banner}
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-H9paZHsqPzGrEkSt-LzrQHaEK%26pid%3DApi&f=1" }}
          />
          <View style={styles.wrap}>
            <Text style={styles.title}>{Data.original_title}</Text>
            <View style={{ position: "absolute", top: 44, right: 30, width: 50, height: 30, opacity: 0.5 }}>
              <Image
                source={require("../img/logo-4k.png")}
                style={{
                  width: null,
                  height: null,
                  resizeMode: "center",
                  flex: 1
                }} />

            </View>
            <View style={{marginVertical: 20, flexDirection:"row", justifyContent:"space-between"}}>
              
              <TouchableOpacity
                style={styles.btnWatch}>
                <Text style={styles.btnWatchText}>WATCH NOW</Text>
              </TouchableOpacity>
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Icon name='star' width={25} height={25} fill={"yellow"} style={{opacity:1}}/>
              <Icon name='star' width={25} height={25} fill={"yellow"} style={{opacity:1}}/>
              <Icon name='star' width={25} height={25} fill={"yellow"} style={{opacity:1}}/>
              <Icon name='star' width={25} height={25} fill={"yellow"} style={{opacity:0.6}}/>
              <Icon name='star' width={25} height={25} fill={"yellow"} style={{opacity:0.6}}/>
              </View>
            </View>
            <Text style={styles.description}>
              {Data.overview}
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.interpreter}>
                <Interpreter />
                <Interpreter />
                <Interpreter />
                <Interpreter />
                <Interpreter />
                <Interpreter />
                <Interpreter />
                <Interpreter />
              </View>
            </ScrollView>
            <View style={styles.moreInfo}>
              <View style={styles.row}>
                <Text style={styles.label}>Studio</Text>
                <Text style={styles.text}>
                  {Data.production_companies.map((i, key) => { return (<Text key={key}>{i.name}, </Text>) })}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Genre:</Text>
                <Text style={styles.text}>
                  {Data.genres.map((i, key) => {
                    return (
                      <Text key={key}>{i.name}</Text>
                    )
                  })}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Release</Text>
                <Text style={styles.text}>2018</Text>
              </View>
            </View>
          </View>
        </>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 320,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  wrap: {
    padding: 30
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },
  btnWatch: {
    //marginVertical: 20,
    height: 33,
    width: 115,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btnWatchText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white"
  },
  description: {
    color: "white",
    fontSize: 14,
    lineHeight: 24,
    opacity: 0.7
  },
  interpreter: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  },
  moreInfo: {},
  row: { flexDirection: "row" },
  label: {

    width: "20%",
    fontWeight: "700",
    fontSize: 13,
    color: "white",
    lineHeight: 24,
  },
  text: {
    fontSize: 13,
    color: "white",
    lineHeight: 24,
    opacity: 0.7
  }
})
export default Dashboard



  // "adult": false,
  // "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
  // "belongs_to_collection": null,
  // "budget": 63000000,
  // "genres": [{"id": 18, "name": "Drama"}],
  // "homepage": "http://www.foxmovies.com/movies/fight-club",
  // "id": 550,
  // "imdb_id": "tt0137523",
  // "original_language": "en",
  // "original_title": "Fight Club",
  // "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  // "popularity": 46.544,
  // "poster_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
  // "production_companies": [
  //   {"id": 508, "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png", "name": "Regency Enterprises", "origin_country": "US"},
  //   {"id": 711, "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png", "name": "Fox 2000 Pictures", "origin_country": "US"},
  //   {"id": 20555, "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png", "name": "Taurus Film", "origin_country": "DE"},
  //   {"id": 54051, "logo_path": null, "name": "Atman Entertainment", "origin_country": ""},
  //   {"id": 54052, "logo_path": null, "name": "Knickerbocker Films", "origin_country": "US"},
  //   {"id": 25, "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png", "name": "20th Century Fox", "origin_country": "US"},
  //   {"id": 4700, "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png", "name": "The Linson Company", "origin_country": "US"}
  // ],
  // "production_countries": [
  //   {"iso_3166_1": "DE", "name": "Germany"},
  //   {"iso_3166_1": "US", "name": "United States of America"}
  // ],
  // "release_date": "1999-10-15",
  // "revenue": 100853753,
  // "runtime": 139,
  // "spoken_languages": [{"english_name": "English", "iso_639_1": "en", "name": "English"}],
  // "status": "Released",
  // "tagline": "Mischief. Mayhem. Soap.",
  // "title": "Fight Club",
  // "video": false,
  // "vote_average": 8.4,
  // "vote_count": 22393

