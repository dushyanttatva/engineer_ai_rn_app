import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1
  },
  container:{
    height: '100%',
    backgroundColor: COLORS.white,
  },
  scrollView:{
    flexGrow: 1,
    backgroundColor: COLORS.TRANSPARENT,
    marginHorizontal: 8,
  },
  row:{
    flexDirection:'row',
    marginVertical:2
  },
  horizontalSpace:{
    marginHorizontal:16
  },
  verticalSpace:{
    marginVertical: 10
  },
  textStyle:{
    color: COLORS.black,
    lineHeight: 20,
    fontSize: 16,
    flexWrap: "wrap",
  },
  textlabel:{
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "bold",
    marginEnd: 8,
  },
  textValue:{
    fontSize: 14,
    color: COLORS.black,
  },
  seperator:{
    height: 1,
    backgroundColor: COLORS.lightGray,
  }
});
export default styles;
