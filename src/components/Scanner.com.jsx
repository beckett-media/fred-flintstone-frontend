import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ScanbotSDK from 'scanbot-web-sdk/webpack';
import { fetchOrder } from '../store/order/order.slice';

const LICENSE_KEY =
  'OHQ8/vmtrggR/rVrfIj/gRLh3HLJYu' +
  'qcTj4WYwJJ6LdNtWJG3NW3ABNp6EKF' +
  'KY/3r6cTCAexp2Qs2zYY7JDV4PZcLF' +
  '1Ewp2HzZErPgv43XtYzwvfxL09mwWp' +
  'f17q16sjYUwk879HZXOonRsAvCLjVS' +
  'KkRGfcgIZRfMhR0NbA7r1GFJdwPOcP' +
  'p2v6tZgWdBKdvTAYNC34dHSyKG8Z3G' +
  '2GCRPKhovriXBISIQ/0wdCLpkNY9KC' +
  'KlCmJjI1rTwTiIJzdf/pn4g0iStTqA' +
  'vFCKujrv7uBXytDdqxfiZ810d/Bs+A' +
  'rb/wOgLOKjsIsGBOoFUu0ARYlm+Bl+' +
  'pZpmiBFoCVCQ==\nU2NhbmJvdFNESw' +
  'psb2NhbGhvc3R8d3d3LmJlY2tldHQu' +
  'Y29tCjE2NzI0NDQ3OTkKODM4ODYwNw' +
  'o4\n';

const Scanner = () => {
  const [sdk, setSdk] = useState(null);
  const [barCodeScanner, setBarCodeScanner] = useState(null);
  const [lastBarCode, setLastBarCode] = useState();
  const dispatch = useDispatch();

  const updateLastBarCode = (barCode) => {
    if (barCode !== lastBarCode) setLastBarCode(barCode);
  };

  const onBarcodesDetected = async (result) => {
    updateLastBarCode(result.barcodes[0].text);
  };

  useEffect(() => {
    if (lastBarCode) {
    }
  }, [lastBarCode]);

  // useEffect(() => {
  //   const init = async () => {
  //     const sdk = await ScanbotSDK.initialize({
  //       licenseKey: LICENSE_KEY,
  //       engine: '/',
  //     });
  //     setSdk(sdk);
  //   };
  //   init();
  // }, []);

  useEffect(() => {
    dispatch(fetchOrder(1));
  });

  useEffect(() => {
    const config = {
      onBarcodesDetected,
      containerId: 'barcode-scanner-view',
    };
    if (sdk) {
      const init = async () => {
        const barcodeScanner = await sdk.createBarcodeScanner(config);
        setBarCodeScanner(barcodeScanner);
      };
      init();
    }
  }, [sdk]);

  const resumeBarCodeScanner = async () => {
    if (barCodeScanner) {
      await barCodeScanner.resumeDetection();
    }
  };

  const pauseBarCodeScanner = async () => {
    if (barCodeScanner) {
      await barCodeScanner.pauseDetection();
    }
  };

  const disposeBarCodeScanner = async () => {
    if (barCodeScanner) {
      await barCodeScanner.dispose();
    }
  };

  return (
    <>
      <div
        id="barcode-scanner-view"
        style={{
          height: '70%',
          width: '70%',
          border: '1px solid black',
          paddingBottom: '50px',
        }}
      ></div>

      <button onClick={resumeBarCodeScanner}>Resume</button>
      <button onClick={pauseBarCodeScanner}>Pause</button>
      <button onClick={disposeBarCodeScanner}>Dispose</button>
      <div>Last Bar Code = {lastBarCode}</div>
    </>
  );
};

export default Scanner;
