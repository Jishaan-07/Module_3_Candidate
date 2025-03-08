import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'react-bootstrap';

const ESignature = ({ onSave }) => {
    const sigCanvas = useRef(null);
    const [isSigned, setIsSigned] = useState(false);

     const clearSignature = () => {
        if (sigCanvas.current) {
            sigCanvas.current.clear();
            setIsSigned(false);
        }
    };

    // Saving the sign as an image
    const saveSignature = () => {
        if (sigCanvas.current) {
            const signatureImage = sigCanvas.current.toDataURL('image/png');  
            onSave(signatureImage);  
            setIsSigned(true);
        }
    };

    return (
        <div className="text-center">
            <h4 className="mb-3">Sign Below:</h4>
            <div style={{ border: '1px solid #ccc', width: '100%', height: '200px' }}>
                <SignatureCanvas 
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{ width: 400, height: 200, className: 'signatureCanvas' }}
                />
            </div>

            <div className="mt-3">
                <Button variant="danger" onClick={clearSignature} className="me-3">Clear</Button>
                <Button variant="primary" onClick={saveSignature} disabled={isSigned}>Save</Button>
            </div>
        </div>
    );
};

export default ESignature;
