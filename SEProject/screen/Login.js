import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";

import Button2 from '../components/Button2';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.secondary}}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.white
                    }}>
                      Login
                    </Text>

                 
                </View>
                

               
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.white
                    }}>User Name</Text>

                    <View style={{
                        width: "100%",
                        height: 70,
                        borderColor: COLORS.white,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        backgroundColor: COLORS.white,
                    }}>
                        

                        <TextInput
                            placeholder='Enter your user name'
                            placeholderTextColor={COLORS.grey}
                         
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.white
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 70,
                        borderColor: COLORS.white,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        backgroundColor: COLORS.white,
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.grey}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.white} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.white} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                

                <Button2
                    title="Login"
                    onPress={() => navigation.navigate("Steptwo")}
                    filled
                    style={{
                        marginTop:1,
                        marginBottom: 10,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 70 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.white,
                            marginHorizontal: 10,
                           
                        }}
                    />
                    <Text style={{ fontSize: 14 ,
                            color: COLORS.white,}}>Or </Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.white,
                            marginHorizontal: 10,
                        
                        }}
                    />
                </View>

                

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 1
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.white }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("")}
                    >
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.white,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login
