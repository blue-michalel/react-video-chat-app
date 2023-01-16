import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ImageOff from '../../assets/images/camera_off.png';

export interface Props {
  videoTrack?: MediaStreamTrack;
}

const Video: React.FC<Props> = React.memo(({ videoTrack }) => {
  const { t } = useTranslation('call');
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoEl.current && videoTrack) {
      videoEl.current.srcObject = new MediaStream([videoTrack]);
    }
  }, [videoTrack]);

  return (
    <video
      width={300}
      height={300}
      ref={videoEl}
      autoPlay
      playsInline
      poster={ImageOff}>
      <span> {t('errors.not_support')}</span>
    </video>
  );
});

export default Video;
