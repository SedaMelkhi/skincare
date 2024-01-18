const PickupMap = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <a
        href="https://yandex.ru/maps/org/skin_care_agents/215070387952/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
        Skin Care Agents
      </a>
      <a
        href="https://yandex.ru/maps/1106/grozniy/category/perfume_and_cosmetics_shop/184105798/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
        Магазин парфюмерии и косметики в Грозном
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/org/skin_care_agents/215070387952/features/?from=api-maps&ll=45.679646%2C43.322334&utm_source=api-maps&z=17"
        width="100%"
        height="100%"
        style={{ position: 'relative' }}></iframe>
    </div>
  );
};

export default PickupMap;
