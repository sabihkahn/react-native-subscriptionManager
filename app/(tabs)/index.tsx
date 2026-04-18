import { Text, View } from "react-native";
import "@/global.css"
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView>

        <View className="p-3 justify-center items-center flex ">

    <View
      className="text-4xl rounded-2xl bg-amber-300 border-2  border-amber-100 px-9 py-20 justify-center items-center flex "
    >
      <Text className="text-black text-2xl font-mono">Total balance: <Text className="text-3xl font-semibold text-white ">547$</Text> </Text>
   
    </View>
 <View
      className="text-4xl w-full rounded-2xl bg-emerald-800 border-2  border-amber-100 py-3 justify-center items-center flex "
    >
      <Text className="text-black text-2xl font-mono overflow-y-scroll">Create account <Text className="text-3xl font-semibold text-white ">Go now!</Text> </Text>
   
   
<Link href="/(auth)/SignIn" asChild>
  <View className="w-[220px] h-[50px] mt-3 bg-amber-900 border-2 rounded-2xl border-amber-50 justify-center items-center">
    <Text className="text-amber-50 text-xl">SignIn</Text>
  </View>
</Link>
<Link href="/(auth)/Signup" asChild>
  <View className="w-[220px] h-[50px] mt-3 bg-black border-2 rounded-2xl border-amber-50 justify-center items-center">
    <Text className="text-amber-50 text-xl">Signup</Text>
  </View>
</Link>
    </View>
    <Link href={{pathname:"/(tabs)/Subscriptions/[id]",params:{id:"gemenai"}}} asChild>
    <View className="w-[220px] h-[50px] mt-56 bg-black border-2 rounded-2xl border-amber-50 justify-center items-center">
    <Text className="text-amber-50 text-xl">go to subscription</Text>
  </View>
    
    </Link>


    

    </View>
  </SafeAreaView>

  ); 
}
