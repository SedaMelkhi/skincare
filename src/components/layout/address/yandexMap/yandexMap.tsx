import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from 'react-yandex-maps';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

interface IWorkTimeList {
  day: number;
  time: string;
}

interface IMapData {
  type: string;
  id: string;
  geometry: { type: string; coordinates: number[] };
  properties: {
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
  };
  work_time_list: string;
}

const YandexMap = () => {
  const apiKey = 'aabbc81f-486d-4525-9b53-133c380eb5fe';
  const mapData: IMapData[] = useSelector((state: any) => state.address.mapData);

  const [mapState, setMapState] = useState({
    center: [43.33417, 45.68794],
    zoom: 15,
  });
  const handleMarkerClick = (index: number) => {
    const clickedPlacemark = mapData[index];
    const newMapState = {
      center: clickedPlacemark.geometry.coordinates,
      zoom: mapState.zoom === 19 ? 20 : 19, // Установите желаемый масштаб
    };
    console.log(newMapState);

    setMapState(newMapState);
  };
  return (
    <YMaps query={{ apikey: apiKey }}>
      <Map state={mapState} width={100}>
        <ZoomControl />
        <GeolocationControl />
        {mapData.map(({ geometry, properties, id }, index) => (
          <Placemark
            key={id}
            geometry={geometry.coordinates}
            properties={properties}
            onClick={() => handleMarkerClick(index)}
            options={{ draggable: false }}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
