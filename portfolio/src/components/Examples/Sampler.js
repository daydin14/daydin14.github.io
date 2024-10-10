// Dependencies
import React, { useState, Suspense, lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Components
const BootstrapExample = lazy(() => import('./BootstrapExample.js'));
const BulmaExample = lazy(() => import('./BulmaExample.js'));
const ChakraUIExample = lazy(() => import('./ChakraUIExample.js'));
const DaisyUIExample = lazy(() => import('./DaisyUIExample.js'));
const MaterialUIExample = lazy(() => import('./MaterialUIExample.js'));
const PureCSSExample = lazy(() => import('./PureCSSExample.js'));
const TailwindExample = lazy(() => import('./TailwindExample.js'));

const Sampler = () => {
    const [selectedFramework, setSelectedFramework] = useState('Bootstrap');

    const renderExample = () => {
        switch (selectedFramework) {
            case 'Bootstrap':
                return <BootstrapExample />;
            case 'Bulma':
                return <BulmaExample />;
            case 'ChakraUI':
                return (
                    <ChakraProvider>
                        <ChakraUIExample />
                    </ChakraProvider>
                );
            case 'DaisyUI':
                return <DaisyUIExample />;
            case 'MaterialUI':
                return <MaterialUIExample />;
            case 'PureCSS':
                return <PureCSSExample />;
            case 'Tailwind':
                return <TailwindExample />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ marginRight: '10px' }}>Select CSS Framework/Library</h1>
                <select onChange={(e) => setSelectedFramework(e.target.value)} value={selectedFramework}>
                    <option value="Bootstrap">Bootstrap</option>
                    <option value="Bulma">Bulma</option>
                    <option value="ChakraUI">ChakraUI</option>
                    <option value="DaisyUI">DaisyUI</option>
                    <option value="MaterialUI">MaterialUI</option>
                    <option value="PureCSS">PureCSS</option>
                    <option value="Tailwind">Tailwind</option>
                </select>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {renderExample()}
            </Suspense>
        </div>
    );
}

export default Sampler