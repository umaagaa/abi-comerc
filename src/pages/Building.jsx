import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, CheckCircle, XCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { Tags } from 'lucide-react';

export default function Building() {
  const { t } = useTranslation();
  const [selectedFloor, setSelectedFloor] = useState(null);

  
  const floorData = {
    0: {
      image: '/kuca.jpg',
      apartments: [
        { number: '001', status: 'available', area: 65, type: 'apartment' },
        { number: '002', status: 'occupied', area: 75, type: 'apartment' },
        { number: '003', status: 'available', area: 55, type: 'apartment' },
        { number: '004', status: 'available', area: 85, type: 'apartment' },
        { number: '005', status: 'occupied', area: 70, type: 'apartment' },
        { number: 'PP1', status: 'available', area: 120, type: 'business' },
        { number: 'PP2', status: 'occupied', area: 150, type: 'business' },
      ],
    },
    1: {
      image: '/kuca.jpg', 
      apartments: [
        { number: '101', status: 'available', area: 65, type: 'apartment' },
        { number: '102', status: 'occupied', area: 75, type: 'apartment' },
        { number: '103', status: 'available', area: 55, type: 'apartment' },
        { number: '104', status: 'available', area: 85, type: 'apartment' },
        { number: '105', status: 'occupied', area: 70, type: 'apartment' },
        { number: '106', status: 'available', area: 60, type: 'apartment' },
        { number: '107', status: 'available', area: 80, type: 'apartment' },
        { number: '108', status: 'available', area: 90, type: 'apartment' },
      ],
    },
    2: {
      image: '/firma.jpg',
      apartments: [
        { number: '201', status: 'occupied', area: 70, type: 'apartment' },
        { number: '202', status: 'available', area: 60, type: 'apartment' },
        { number: '203', status: 'occupied', area: 80, type: 'apartment' },
        { number: '204', status: 'available', area: 90, type: 'apartment' },
        { number: '205', status: 'available', area: 65, type: 'apartment' },
        { number: '206', status: 'occupied', area: 75, type: 'apartment' },
        { number: '207', status: 'available', area: 55, type: 'apartment' },
        { number: '208', status: 'available', area: 85, type: 'apartment' },
      ],
    },
    3: {
      image: '/kuca.jpg',
      apartments: [
        { number: '301', status: 'available', area: 65, type: 'apartment' },
        { number: '302', status: 'available', area: 75, type: 'apartment' },
        { number: '303', status: 'occupied', area: 55, type: 'apartment' },
        { number: '304', status: 'available', area: 85, type: 'apartment' },
        { number: '305', status: 'available', area: 70, type: 'apartment' },
        { number: '306', status: 'occupied', area: 60, type: 'apartment' },
        { number: '307', status: 'available', area: 80, type: 'apartment' },
        { number: '308', status: 'available', area: 90, type: 'apartment' },
      ],
    },
    4: {
      image: '/firma.jpg',
      apartments: [
        { number: '401', status: 'occupied', area: 70, type: 'apartment' },
        { number: '402', status: 'occupied', area: 60, type: 'apartment' },
        { number: '403', status: 'available', area: 80, type: 'apartment' },
        { number: '404', status: 'available', area: 90, type: 'apartment' },
        { number: '405', status: 'available', area: 65, type: 'apartment' },
        { number: '406', status: 'occupied', area: 75, type: 'apartment' },
        { number: '407', status: 'available', area: 55, type: 'apartment' },
        { number: '408', status: 'available', area: 85, type: 'apartment' },
      ],
    },
    5: {
      image: '/kuca.jpg',
      apartments: [
        { number: '501', status: 'available', area: 65, type: 'apartment' },
        { number: '502', status: 'available', area: 75, type: 'apartment' },
        { number: '503', status: 'available', area: 55, type: 'apartment' },
        { number: '504', status: 'occupied', area: 85, type: 'apartment' },
        { number: '505', status: 'available', area: 70, type: 'apartment' },
        { number: '506', status: 'occupied', area: 60, type: 'apartment' },
        { number: '507', status: 'available', area: 80, type: 'apartment' },
        { number: '508', status: 'available', area: 90, type: 'apartment' },
      ],
    },
    6: {
      image: '/firma.jpg',
      apartments: [
        { number: '601', status: 'available', area: 70, type: 'apartment' },
        { number: '602', status: 'occupied', area: 60, type: 'apartment' },
        { number: '603', status: 'available', area: 80, type: 'apartment' },
        { number: '604', status: 'available', area: 90, type: 'apartment' },
        { number: '605', status: 'available', area: 65, type: 'apartment' },
        { number: '606', status: 'occupied', area: 75, type: 'apartment' },
        { number: '607', status: 'available', area: 55, type: 'apartment' },
        { number: '608', status: 'available', area: 85, type: 'apartment' },
      ],
    },
    7: {
      image: '/kuca.jpg',
      apartments: [
        { number: '701', status: 'occupied', area: 65, type: 'apartment' },
        { number: '702', status: 'available', area: 75, type: 'apartment' },
        { number: '703', status: 'available', area: 55, type: 'apartment' },
        { number: '704', status: 'occupied', area: 85, type: 'apartment' },
        { number: '705', status: 'available', area: 70, type: 'apartment' },
        { number: '706', status: 'available', area: 60, type: 'apartment' },
        { number: '707', status: 'occupied', area: 80, type: 'apartment' },
        { number: '708', status: 'available', area: 90, type: 'apartment' },
      ],
    },
    8: {
      image: '/firma.jpg',
      apartments: [
        { number: '801', status: 'available', area: 70, type: 'apartment' },
        { number: '802', status: 'available', area: 60, type: 'apartment' },
        { number: '803', status: 'available', area: 80, type: 'apartment' },
        { number: '804', status: 'available', area: 90, type: 'apartment' },
        { number: '805', status: 'available', area: 65, type: 'apartment' },
        { number: '806', status: 'occupied', area: 75, type: 'apartment' },
        { number: '807', status: 'available', area: 55, type: 'apartment' },
        { number: '808', status: 'available', area: 85, type: 'apartment' },
      ],
    },
  };

  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
  };

  const currentFloorData = selectedFloor !== null ? floorData[selectedFloor] : null;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8 w-full">
              <div className="border-t-2 border-red-500 flex-1 max-w-[220px]" />
              <div className="mx-4 text-red-500 transform hover:scale-110 transition-transform duration-300">
                <Tags size={32} />
              </div>
              <div className="border-t-2 border-red-500 flex-1 max-w-[220px]" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          {t('building.title')}
        </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t('building.description')}
        </p>
          </div>

          {/* Floor Selection */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((floor) => (
                <button
                  key={floor}
                  onClick={() => handleFloorSelect(floor)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedFloor === floor
                      ? 'border-red-500 bg-red-500 text-white shadow-md'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-red-400 hover:text-red-500 hover:bg-red-50'
                  }`}
                >
                  <div className="text-sm font-medium">
                    {floor === 0
                      ? t('building.groundFloor')
                      : `${t('building.floor')} ${floor}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Floor Details */}
          {selectedFloor !== null && currentFloorData ? (
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100 animate-fadeIn">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8 text-center">
                {selectedFloor === 0
                  ? t('building.groundFloor')
                  : `${t('building.floor')} ${selectedFloor}`}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Floor Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-xl overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={currentFloorData.image}
                      alt={`${t('building.floor')} ${selectedFloor}`}
                      className="w-full h-64 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Apartments List */}
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
                    {selectedFloor === 0
                      ? `${t('building.apartments')} & ${t('building.businessSpace')}`
                      : t('building.apartments')}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {currentFloorData.apartments.map((apt, index) => (
                      <div
                        key={apt.number}
                        className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
                          apt.status === 'available'
                            ? 'border-green-300 bg-green-50/50 hover:border-green-400'
                            : 'border-gray-300 bg-gray-50/50 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm text-gray-800">
                            {apt.type === 'business'
                              ? t('building.businessSpace')
                              : t('building.apartment')}{' '}
                            <span className="text-red-600">{apt.number}</span>
                          </span>
                          {apt.status === 'available' ? (
                            <CheckCircle
                              className="text-green-500 flex-shrink-0"
                              size={18}
                            />
                          ) : (
                            <XCircle className="text-gray-400 flex-shrink-0" size={18} />
                          )}
                        </div>
                        <div className="mb-2">
                          <span className="text-xs text-gray-500">
                            {t('building.area')}:{' '}
                          </span>
                          <span className="text-sm font-semibold text-gray-800">
                            {apt.area} {t('building.squareMeters')}
                          </span>
                        </div>
                        <div
                          className={`inline-block px-2.5 py-1 rounded text-xs font-medium ${
                            apt.status === 'available'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-400 text-white'
                          }`}
                        >
                          {apt.status === 'available'
                            ? t('building.available')
                            : t('building.occupied')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100 animate-fadeIn">
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/QjOk15EPMro?autoplay=1&loop=1&playlist=QjOk15EPMro&mute=1&controls=0"
                  title={t('building.presentation')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
  