import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntIcon from "@expo/vector-icons/AntDesign";

import { COLORS } from "../constants";
import { avatarImage } from "../images";

type AntIconsName = React.ComponentProps<typeof AntIcon>["name"];

type SocialItemType = {
  name: string;
  icon: AntIconsName;
};

const socialItemsData: SocialItemType[] = [
  { name: "Github", icon: "github" },
  { name: "Facebook", icon: "facebook-square" },
  { name: "LinkedIn", icon: "linkedin-square" },
  { name: "Skype", icon: "skype" },
];

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            source={avatarImage}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.contentName}>An Quoc Phan</Text>
          <Text style={styles.contentTitle}>Software Engineer</Text>
        </View>
        <FlatList
          style={styles.socialContainer}
          data={socialItemsData}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.socialItem}>
              <AntIcon name={item.icon} color="white" size={30} />
              <Text style={styles.socialItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
  titleWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: (deviceWidth * 1) / 3,
    width: (deviceWidth * 2) / 3,
    height: (deviceWidth * 2) / 3,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: COLORS.BLUE,
  },
  avatar: {
    width: "100%",
    flex: 1,
  },
  contentName: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 15,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 15,
  },
  socialContainer: {
    padding: 5,
  },
  socialItem: {
    width: deviceWidth / 2 - 15,
    height: 100,
    margin: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.BLUE,
    padding: 20,
  },
  socialItemText: {
    color: COLORS.WHITE,
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 10,
  },
});
