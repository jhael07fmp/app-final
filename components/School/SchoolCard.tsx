import { School } from "@/types";
import { Text, View, ViewProps } from "react-native";
import tw from "twrnc";
import SchoolCardInfo from "./SchoolCardInfo";
import MapView, { Marker } from "react-native-maps";

const SchoolCard = ({ item }: { item: School }) => {
  const [lat, long] = item.coordenadas.split(",") ?? ["0", "-1"];

  return (
    <View
      style={tw`w-[94] bg-white shadow shadow-lg shadow-slate-300 border border-slate-200 mx-auto gap-1.5 p-4 pb-8 rounded-md`}
    >
      <TwoColumns>
        <SchoolCardInfo label="Código" value={item.codigo} />
        <SchoolCardInfo label="Regional" value={item.regional} />
      </TwoColumns>

      <View style={tw`h-40 rounded-md w-full overflow-hidden border border-slate-200 mt-2`}>
        <MapView
          liteMode
          style={tw`flex-1`}
          scrollEnabled={false}
          zoomEnabled={false}
          region={{
            latitude: Number(lat ?? 0),
            longitude: Number(long ?? 0),
            latitudeDelta: 0.0004,
            longitudeDelta: 0.0004,
          }}
        >
          <Marker
            coordinate={{
              latitude: Number(lat ?? 0),
              longitude: Number(long ?? 0),
            }}
          />
        </MapView>
      </View>

      <SchoolCardInfo type="primary" label="Nombre" value={item.nombre} />

      <View style={tw`w-full h-[0.3] bg-slate-200 mb-2`}></View>

      <TwoColumns>
        <SchoolCardInfo label="Distrito" value={item.distrito} />
        <SchoolCardInfo label="Distrito Municipal" value={item.d_dmunicipal} />
      </TwoColumns>
    </View>
  );
};

export default SchoolCard;

const TwoColumns = (props: ViewProps) => (
  <View style={tw`flex flex-row justify-between items-center`}>{props.children}</View>
);
