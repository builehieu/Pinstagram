import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Text
  a1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    justifyContent: 'center',
    height: height * 0.08,
    borderRadius: 8,
    backgroundColor: '#ffb200',
    marginBottom: 6,
    margin: 3,
  },
  button2: {
    justifyContent: 'center',
    height: height * 0.08,
    borderRadius: 8,
    //backgroundColor: 'gray',
    marginBottom: 6,
    margin: 3,
    marginLeft: 4,
    borderWidth: 1,
    borderColor: '#ffb200',
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  buttonText2: {
    textAlign: 'center',
    color: '#ffb200',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  buttonPrevious:
    {
      position: 'absolute',
      justifyContent: 'center',
      height: height * 0.06,
      width: height * 0.06,
      margin: 10,
      left: -10,
      //backgroundColor:'black'
    },
  form: {
    marginRight: 40,
    marginLeft: 40,

  },
  small: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  links: {
    color: '#0c9eff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInput: {
    //backgroundColor: '#f9f8f4',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dddbd7',
    marginBottom: 6,
    margin: 2,
    height: 48,
    fontSize: 14,
    paddingHorizontal: 15,
  }
});

export default styles;
