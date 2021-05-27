import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tabHeader: {
    position: 'relative',
    height: 50,
    width: '100%',
    backgroundColor: '#f57791',
  },
  tabScrollContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  tabButtonList: {
    flexDirection: 'row',
  },
  tabButton: {
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#f57791',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonActive: {},
  tabButtonText: {
    color: '#ffffff88',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
  },
  tabButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tabBarContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 100,
    bottom: 0,
  },
  tabBarLine: {
    backgroundColor: '#f57791',
    width: '100%',
    height: 1,
  },
  tabBar: {
    position: 'absolute',
    backgroundColor: '#ffffff88',
    height: 3,
    width: 1,
    left: 0,
    bottom: 0,
  },
});

export default styles;