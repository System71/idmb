import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.main}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        ></Image>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.description}>
          <Text style={styles.h1}>Interstellar</Text>
          <View style={styles.informationsContainer}>
            <Text style={styles.informations}>2014</Text>
            <Text style={styles.informations}>PG-13</Text>
            <Text style={styles.informations}>2h 49min</Text>
            <Text style={styles.informations}>Adventure, Drame, Sci-Fi</Text>
          </View>
          <View style={styles.synopsisContainer}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.film}
            ></Image>
            <View style={styles.synopsis}>
              <Text style={styles.synopsisText}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity'ssurvival.
              </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rankingBar}>
            <View style={styles.rankingContainer}>
              <FontAwesome name="star" size={24} color="yellow" />
              <Text style={styles.rankingText}>
                <Text style={styles.rankingTextBold}>8.6</Text>/10
              </Text>
              <Text style={styles.rankingNumber}>1.1M</Text>
            </View>
            <View style={styles.rateContainer}>
              <FontAwesome name="star-o" size={24} color="white" />
              <Text style={styles.rateText}>RATE THIS</Text>
            </View>
            <View style={styles.metaScoreContainer}>
              <Text style={styles.metaScore}>74</Text>
              <Text style={styles.metaScoreText}>Metascore</Text>
              <Text style={styles.metaScoreNumber}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.castingContainer}>
          <View style={styles.castingBar}>
            <Text style={styles.h2}>Top Billed Cast</Text>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </View>
          <ScrollView
            style={styles.scrollViewActors}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.actorCardContainer}>
              <View style={styles.actorCard}>
                <Image
                  source={require("./assets/matthew.jpg")}
                  style={styles.actorCardPicture}
                ></Image>
                <View style={styles.actorIdentity}>
                  <Text style={styles.actorCardName} numberOfLines={1}>
                    Matthew McConaughey
                  </Text>
                  <Text style={styles.actorCardNickname}>Cooper</Text>
                </View>
              </View>
              <View style={styles.actorCard}>
                <Image
                  source={require("./assets/anne.jpg")}
                  style={styles.actorCardPicture}
                ></Image>
                <View style={styles.actorIdentity}>
                  <Text style={styles.actorCardName}>Anne Hathaway</Text>
                  <Text style={styles.actorCardNickname}>Brand</Text>
                </View>
              </View>
              <View style={styles.actorCard}>
                <Image
                  source={require("./assets/jessica.jpg")}
                  style={styles.actorCardPicture}
                ></Image>
                <View style={styles.actorIdentity}>
                  <Text style={styles.actorCardName}>Jessica Chaslain</Text>
                  <Text style={styles.actorCardNickname}>Murph</Text>
                </View>
              </View>
              <View style={styles.actorCard}>
                <Image
                  source={require("./assets/mackenzie.jpg")}
                  style={styles.actorCardPicture}
                ></Image>
                <View style={styles.actorIdentity}>
                  <Text style={styles.actorCardName}>Jessica Chaslain</Text>
                  <Text style={styles.actorCardNickname}>Murph</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.production}>
            <View>
              <Text style={styles.h3}>Director</Text>
              <Text style={styles.productionName}>Christopher Nolan</Text>
            </View>
            <View>
              <Text style={styles.h3}>Writers</Text>
              <Text style={styles.productionName}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: Constants.statusBarHeight,
    height: "100%",
  },
  scrollView: {
    backgroundColor: "#191919",
  },
  header: {
    backgroundColor: "#393939",
    alignItems: "flexstart",
    justifyContent: "flex-start",
    height: "auto",
    paddingLeft: 15,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  description: {
    backgroundColor: "#212121",
    padding: 15,
  },
  h1: {
    color: "white",
    fontSize: 28,
    marginBottom: 15,
  },
  informationsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  informations: {
    color: "grey",
  },
  synopsisContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  film: {
    width: 120,
    height: 200,
    resizeMode: "contain",
    // borderColor: "red",
    // borderWidth: 2,
  },
  synopsis: {
    paddingTop: 15,
    paddingLeft: 15,
    flexShrink: 1,
  },
  synopsisText: {
    width: "100",
    color: "white",
    fontWeight: "300",
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#0277BD",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  },
  rankingBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rankingContainer: { alignItems: "center" },
  rankingText: {
    color: "white",
    fontSize: 12,
  },
  rankingTextBold: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  rankingNumber: {
    color: "grey",
    fontSize: 12,
  },
  rateContainer: {
    color: "white",
    alignItems: "center",
  },
  rateText: {
    color: "white",
    marginTop: 3,
  },
  metaScoreContainer: {
    alignItems: "center",
  },
  metaScore: {
    color: "white",
    backgroundColor: "green",
    padding: 2,
  },
  metaScoreText: {
    color: "white",
    marginTop: 3,
  },
  metaScoreNumber: {
    color: "grey",
    fontSize: 12,
  },
  castingContainer: {
    marginTop: 15,
    backgroundColor: "#212121",
    padding: 15,
  },
  castingBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  h2: {
    color: "white",
    fontSize: 22,
  },
  seeAll: {
    color: "#0277BD",
  },
  scrollViewActors: {
    flexGrow: 0,
  },
  actorCardContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  actorCard: {
    backgroundColor: "#2A2A2A",
    width: 150,
  },
  actorCardPicture: {
    height: 230,
    width: "100%",
    resizeMode: "cover",
  },
  actorIdentity: {
    margin: 10,
  },
  actorCardName: {
    color: "white",
  },
  actorCardNickname: {
    color: "grey",
  },
  production: {
    gap: 10,
  },
  h3: {
    color: "white",
  },
  productionName: {
    color: "grey",
  },
});
