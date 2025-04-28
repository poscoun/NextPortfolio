import React from 'react';
import dynamic from 'next/dynamic';
import lottieJson from '/public/animation.json';

// Lottie 컴포넌트를 dynamic import로 불러옴 (서버사이드 렌더링 비활성화)
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function Animation() {
  return (
      <Lottie
          loop
          animationData={lottieJson}
          play
          //style={{ width: 300, height: 300 }} // 스타일은 필요에 따라 조정 가능
      />
  );
}
