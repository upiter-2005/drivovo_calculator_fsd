'use client'

//import { useClickAway } from 'react-use';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from './closeIcon';
interface Props {
  children: React.ReactNode;
  visible: boolean;
  noBgc?: boolean;
  onClose: () => void;
}

export const PortalComponent: React.FC<Props> = ({ children, visible, onClose, noBgc }) => {
  const [mounted, setMounted] = useState(false);
  //const ref = useRef<HTMLDivElement>(null);

  // useClickAway(ref, () => {
  //   if (visible) {
  //     onClose();
  //   }
  // });

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted || !visible) return null;

  return createPortal(
      <div
        //ref={ref}
        className={`communicationModal ${noBgc && '!bg-transparent !p-0'} ${(visible && mounted) && 'activeModal'}`} //${noBgc && '!bg-transparent !p-0'}
      >
        <CloseIcon closeHandler={() => onClose() } />
        {children}
      </div>,
    
  document.body
)
};
