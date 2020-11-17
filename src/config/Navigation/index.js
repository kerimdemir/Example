/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState, useEffect} from 'react';

import {View, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import I18n from 'react-native-i18n';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Home from "../../pages/Home";
import {Colors, Images, Metrics} from "../../themes";
import RootStackScreen from "./Root/RootStackScreen";
import TabBar from "./tab-bar";
import Profile from "../../pages/Profile";
import ActionButton from "react-native-circular-action-menu";
import RNBootSplash from "react-native-bootsplash";
import AddFuelFill from "../../components/AddFuelFill";
import {AddOtherCost} from "../../components/AddOtherCost";
import ManageYourGarage from "../../pages/Profile/ManageYourGarage";
import ChangePassword from "../../pages/Profile/ChangePassword";
import ProfileSettings from "../../pages/Profile/ProfileSettings";
import TermsPrivacy from "../../pages/Profile/TermsPrivacy";
import ContactUs from "../../pages/Profile/ContactUs";
import ChooseVehicle from "../../components/ChooseVehicle";
import {Button} from "react-native-elements";
import Header from "../../components/Header";
import Console from "../../pages/Home/Console";
import Expense from "../../pages/Home/Expense";
import Fuel from "../../pages/Home/Fuel";
import Map from "../../pages/Home/Map";
import Service from "../../pages/Home/Service";
import Tire from "../../pages/Home/Tire";
import Insurance from "../../pages/Home/Insurance";
import Reminder from "../../pages/Home/Reminder";
import All from "../../pages/Home/Service/All";
import Allexpense from "../../pages/Home/Expense/All";
import PeriodicService from "../../pages/Home/Service/PeriodicService";
import Repair from "../../pages/Home/Service/Repair";
import CarWash from "../../pages/Home/Expense/CarWash";
import Financing from "../../pages/Home/Expense/Financing";
import Fine from "../../pages/Home/Expense/Fine";
import Inspection from "../../pages/Home/Expense/Inspection";
import Parking from "../../pages/Home/Expense/Parking";
import Registration from "../../pages/Home/Expense/Registration";
import Tools from "../../pages/Home/Expense/Tools";
import Tax from "../../pages/Home/Expense/Tax";
import Other from "../../pages/Home/Expense/Other";
import {getToken} from "../../store/actions/auth.actions";
import Loader from "../../components/Loader";

const TopTab = createMaterialTopTabNavigator();
const ServiceTab = createMaterialTopTabNavigator();
const ExpenseTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const HomePage = createStackNavigator();
const ProfilePage = createStackNavigator();
const Stack = createStackNavigator();


const tabBarOptions = {
    upperCaseLabel: false,
    labelStyle: {fontSize: 12, textTransform: 'capitalize'},
    activeTintColor: Colors.TEXT_COLOR_ACTIVE,
    inactiveTintColor: Colors.TEXT_COLOR_PASSIVE,
    indicatorStyle: {backgroundColor: Colors.TEXT_COLOR_PASSIVE},
    style: {
        backgroundColor: 'white',
    },
}

const Navigation = ({
                        navigation,
                        auth: {accesstoken, isAccessToken_Pending},
                        getToken,
                    }) => {
    const ref = React.useRef(null);
    const [aktif, setAktif] = useState(false);

    useEffect(() => {
        getToken();

    }, []);


    function ServiceTabScreen() {
        return (
            <>
                <ServiceTab.Navigator
                    tabBarOptions={tabBarOptions}>
                    <ServiceTab.Screen name="All" component={All}/>
                    <ServiceTab.Screen name="Periodic Service" component={PeriodicService}/>
                    <ServiceTab.Screen name="Repair" component={Repair}/>
                </ServiceTab.Navigator>
            </>
        );
    }

    function ExpenseTabScreen() {
        return (
            <>
                <ExpenseTab.Navigator
                    tabBarOptions={{
                        headerShown: true,
                        scrollEnabled: true,
                        upperCaseLabel: false,
                        activeTintColor: Colors.TEXT_COLOR_ACTIVE,
                        inactiveTintColor: Colors.TEXT_COLOR_PASSIVE,
                        indicatorStyle: {backgroundColor: Colors.TEXT_COLOR_PASSIVE},
                        labelStyle: {fontSize: 14, textTransform: 'capitalize'},
                        tabStyle: {width: 'auto'},
                        style: {backgroundColor: 'white'},
                    }}>

                    <ExpenseTab.Screen name="All" component={Allexpense}/>
                    <ExpenseTab.Screen name="CarWash" component={CarWash}/>
                    <ExpenseTab.Screen name="Repair" component={Repair}/>
                    <ExpenseTab.Screen name="Fine" component={Fine}/>
                    <ExpenseTab.Screen name="Inspection" component={Inspection}/>
                    <ExpenseTab.Screen name="Other" component={Other}/>
                    <ExpenseTab.Screen name="Parking" component={Parking}/>
                    <ExpenseTab.Screen name="Registration" component={Registration}/>
                    <ExpenseTab.Screen name="Tax" component={Tax}/>
                    <ExpenseTab.Screen name="Tools" component={Tools}/>
                </ExpenseTab.Navigator>
            </>
        );
    }

    function HomeTab({navigation}) {
        return (
            <>
                <Header navigation={navigation}/>
                <TopTab.Navigator
                    tabBarOptions={{
                        headerShown: true,
                        scrollEnabled: true,
                        upperCaseLabel: false,
                        activeTintColor: Colors.TEXT_COLOR_ACTIVE,
                        inactiveTintColor: Colors.TEXT_COLOR_PASSIVE,
                        indicatorStyle: {backgroundColor: Colors.TEXT_COLOR_PASSIVE},
                        labelStyle: {fontSize: 14, textTransform: 'capitalize'},
                        tabStyle: {width: 'auto'},
                        style: {backgroundColor: 'white'},
                    }}>

                    <TopTab.Screen name="Map" component={Map}/>
                    <TopTab.Screen name="Console" component={Console}/>
                    <TopTab.Screen name="Fuel" component={Fuel}/>
                    <TopTab.Screen name="Service" component={ServiceTabScreen}/>
                    <TopTab.Screen name="Tire" component={Tire}/>
                    <TopTab.Screen name="Insurance" component={Insurance}/>
                    <TopTab.Screen name="Expense" component={ExpenseTabScreen}/>
                    <TopTab.Screen name="Reminder" component={Reminder}/>

                </TopTab.Navigator>
            </>
        );
    }

    const HomeStackScreen = ({navigation}) => (
        <HomePage.Navigator
            screenOptions={{
                headerStyle: {
                    // backgroundColor: Colors.HEADER_COLOR,
                    backgroundColor: Colors.WHITE,


                },
                headerStatusBarHeight: 15,
                headerTintColor: Colors.DARKGRAY,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <HomePage.Screen
                name="HomeScreen"
                component={HomeTab}
                options={{
                    title: '',
                    headerLeft: () => (
                        <Image source={Images.logo}
                               style={{marginLeft: 10, width: 100, height: 100, resizeMode: 'contain'}}/>
                    ),
                    headerRight: () => (
                        <View/>
                    ),

                }}
            />

        </HomePage.Navigator>
    );
    const ProfileStackScreen = ({navigation}) => (
        <ProfilePage.Navigator initialRouteName={'ProfileScreen'}
                               screenOptions={{
                                   headerStyle: {
                                       backgroundColor: 'white',

                                   },
                                   headerTintColor: Colors.DARKGRAY,
                                   headerStatusBarHeight: 15,
                                   headerTitleStyle: {
                                       fontWeight: 'bold',
                                   },
                               }}>
            <ProfilePage.Screen
                name="ProfileScreen"
                component={Profile}
                options={{
                    animationEnabled: false,
                    title: '',
                    headerLeft: () => (
                        <Image source={Images.logo}
                               style={{marginLeft: 10, width: 100, height: 100, resizeMode: 'contain'}}/>
                    ),
                    headerRight: () => (
                        <View/>
                    ),

                }}
            />
            <ProfilePage.Screen
                name="ManageYourGarage"
                component={ManageYourGarage}
                options={{
                    headerTitle: I18n.t("Manage Your Garage"),
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center",

                    animationEnabled: false,
                }}
            />
            <ProfilePage.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{
                    headerTitle: I18n.t("Change Password"),
                    headerBackTitleVisible: false,
                    animationEnabled: false,
                    headerTitleAlign: "center"

                }}
            />
            <ProfilePage.Screen
                name="ProfileSettings"
                component={ProfileSettings}
                options={{
                    headerTitle: I18n.t("Profile Settings"),
                    headerBackTitleVisible: false,
                    animationEnabled: false,
                    headerTitleAlign: "center"

                }}
            />
            <ProfilePage.Screen
                name="TermsPrivacy"
                component={TermsPrivacy}
                options={{
                    headerTitle: I18n.t("Terms & Privacy"),
                    headerBackTitleVisible: false,
                    animationEnabled: false,
                    headerTitleAlign: "center"

                }}
            />
            <ProfilePage.Screen
                name="ContactUs"
                component={ContactUs}
                options={{
                    headerTitle: I18n.t("Contact Us"),
                    animationEnabled: false,
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center"

                }}
            />

        </ProfilePage.Navigator>
    );

    function AppTab({navigation}) {
        return (<SafeAreaView style={{flex: 1}}>
                <Tab.Navigator
                    initialRouteName="Home"
                    tabBar={(props) => <TabBar {...props} />}>
                    <Tab.Screen name="Home" component={HomeStackScreen}/>
                    <Tab.Screen name="Profile" component={ProfileStackScreen}/>

                </Tab.Navigator>


                <View style={{bottom: 32}}>
                    <ActionButton bgColor={'rgba(0,0,0,0.5)'} buttonColor={Colors.TEMPLATE_COLOR}>

                        <ActionButton.Item buttonColor='#f44336' title="New Task" onPress={() => console.log("")}>
                            <TouchableOpacity style={{backgroundColor: 'transparent', padding: 20}}
                                              hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
                                              onPress={() => navigation.navigate('AddFuelFill')}>
                                <Image source={Images.fuel} size={40} style={styles.image}/>
                            </TouchableOpacity>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#2196f3' title="" onPress={() => console.log("")}>
                            <TouchableOpacity style={{backgroundColor: 'transparent', padding: 20}}
                                              hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
                                              onPress={() => navigation.navigate('AddOtherCost', {dropdownName: 'Service'})}>
                                <Image source={Images.service} size={40} style={styles.image}/>
                            </TouchableOpacity>
                        </ActionButton.Item>
                        <ActionButton.Item style={{marginBottom: 10}} buttonColor='#1abc9c' title="All Tasks">
                            <TouchableOpacity style={{backgroundColor: 'transparent', padding: 20}}
                                              hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
                                              onPress={() => navigation.navigate('AddOtherCost', {dropdownName: 'Tire'})}>
                                <Image source={Images.tire} size={40} style={styles.image}/>
                            </TouchableOpacity>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#34a952' title="Notifications" onPress={() => {
                        }}>
                            <TouchableOpacity style={{backgroundColor: 'transparent', padding: 20}}
                                              hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
                                              onPress={() => navigation.navigate('AddOtherCost', {dropdownName: 'Other Expense'})}>
                                <Image source={Images.otherexpense} size={40} style={styles.image}/>
                            </TouchableOpacity>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#fbbc05' title="" onPress={() => console.log("")}>
                            <TouchableOpacity style={{backgroundColor: 'transparent', padding: 20}}
                                              hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
                                              onPress={() => navigation.navigate('AddOtherCost', {dropdownName: 'Insurance'})}>
                                <Image source={Images.insurance} size={40} style={styles.image}/>
                            </TouchableOpacity>
                        </ActionButton.Item>

                    </ActionButton>
                </View>
            </SafeAreaView>
        );
    }

    const CreateNew1 = () => <View style={{flex: 1, backgroundColor: 'transparent'}}/>
    const CreateNew = () => <View style={{position: 'absolute', bottom: 20, backgroundColor: 'red'}}/>

    // Splash Screen Hide
    RNBootSplash.hide({duration: 500});


    return (
        <SafeAreaView style={{flex: 1}}>
            {isAccessToken_Pending ? (
                <Loader/>
            ) : (
                <NavigationContainer ref={ref}>
                    <Stack.Navigator mode="modal"
                                     initialRouteName={accesstoken && accesstoken.selectedVehicleID != 0 ? 'Home1' : 'Auth'}>
                        <Stack.Screen
                            name="Auth"
                            component={RootStackScreen}
                            options={() => ({
                                headerShown: false,
                                animationEnabled: false,
                            })}
                        />
                        <Stack.Screen
                            name="AuthTermsPrivacy"
                            component={TermsPrivacy}
                            options={{
                                headerTitle: I18n.t("Terms & Privacy"),
                                headerBackTitleVisible: false,
                                animationEnabled: false,
                                headerTitleAlign: "center"

                            }}
                        />
                        <Stack.Screen
                            name="Home1"
                            component={AppTab}
                            options={() => ({
                                headerShown: false,
                                animationEnabled: false,
                            })}
                        />
                        <Stack.Screen
                            name="AddFuelFill"
                            component={AddFuelFill}
                            options={{
                                headerTitle: I18n.t("Add Fuel Fill"),
                                animationEnabled: false,
                                headerBackTitleVisible: false,
                                headerTitleAlign: "center",
                                headerStatusBarHeight: 15,
                                headerTintColor: Colors.DARKGRAY,
                            }}
                        />
                        <Stack.Screen
                            name="AddOtherCost"
                            component={AddOtherCost}
                            options={{
                                headerTitle: I18n.t("Add Other Cost"),
                                animationEnabled: false,
                                headerBackTitleVisible: false,
                                headerTitleAlign: "center",
                                headerStatusBarHeight: 15,
                                headerTintColor: Colors.DARKGRAY,
                            }}
                        />


                        <Stack.Screen
                            name="ChooseVehicle"
                            component={ChooseVehicle}
                            options={{
                                headerTitle: I18n.t("Choose Vehicle"),
                                animationEnabled: false,
                                headerBackTitleVisible: false,
                                headerTitleAlign: "center",
                                headerStatusBarHeight: 15,
                                headerTintColor: Colors.DARKGRAY,
                            }}/>

                        <Stack.Screen
                            name="CreateNew"
                            component={CreateNew}
                            options={() => ({
                                headerShown: false,
                                animationEnabled: true,
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </SafeAreaView>

    );
};

const mapStateToProps = ({auth}) => ({
    auth,
});

export default connect(mapStateToProps, {getToken})(
    Navigation,
);


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
        backgroundColor: 'white',
    },
    image: {
        width: 30,
        height: 30,

        resizeMode: 'contain'
    }
});
