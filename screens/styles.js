import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  getstarted: {
    marginTop: 10,
    marginBottom: 30,
    width: "50%",
  },
  getstarts: {
    marginTop: 30,
    width: "50%",
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: "#9B59B6"
  },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "#9B59B6",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color: "#9B59B6",
    marginBottom: 15,
    textAlign: "center"
  }
});
