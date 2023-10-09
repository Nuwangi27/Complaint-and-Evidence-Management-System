import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
     
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
            
        >
            <View style={{ flex: 1 }}>
                
                <View>
                    <Image
                        source={require("../assets/image1.png")}
                        style={{
                            height: 200,
                            width: 278,
                            borderRadius: 10,
                            position: "absolute",
                            top: 60,
                            left:40,
                        
                        }}
                    />

                   

                   
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 300,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Seamless Complaints And
                        Evidence Handling, Anytime, Anywhere</Text>
                        
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Login")}
                        style={{
                            marginTop: 2,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                    
                        

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome