

const ArrowR = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 8px' }}>
        <line x1="2" y1="12" x2="20" y2="12"></line>
        <polyline points="13 5 20 12 13 19"></polyline>
    </svg>
);

const ArrowD = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '8px 0' }}>
        <line x1="12" y1="2" x2="12" y2="20"></line>
        <polyline points="19 13 12 20 5 13"></polyline>
    </svg>
);

const BlackNode = ({ text }: { text: string }) => (
    <div style={{ background: '#000000', color: '#FFFFFF', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, minWidth: '110px', textAlign: 'center' }}>
        {text}
    </div>
);

const GreyNode = ({ text }: { text: string }) => (
    <div style={{ background: '#CDCDCD', color: '#000000', padding: '10px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, minWidth: '115px', textAlign: 'center', boxShadow: 'none' }}>
        {text}
    </div>
);

const WhiteNode = ({ text }: { text: string }) => (
    <div style={{ background: '#F8F9FA', border: '1px solid #D1D1D1', color: '#000000', padding: '10px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, minWidth: '115px', textAlign: 'center' }}>
        {text}
    </div>
);

const GreenNode = ({ text }: { text: string }) => (
    <div style={{ background: '#25B01D', color: '#FFFFFF', padding: '10px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, minWidth: '115px', textAlign: 'center' }}>
        {text}
    </div>
);

const DiamondNode = ({ text1, text2 }: { text1: string, text2: string }) => (
    <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', background: '#666666', transform: 'rotate(45deg)', borderRadius: '2px' }}></div>
        <div style={{ position: 'relative', zIndex: 1, color: '#FFFFFF', textAlign: 'center', fontSize: '11px', lineHeight: '1.4' }}>
            <span style={{ fontWeight: 600 }}>{text1}</span><br />
            {text2}
        </div>
    </div>
);

export default function RecordzUserFlowSection() {
    return (
        <div style={{ width: '100%', overflowX: 'auto', padding: '60px 0 60px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ minWidth: '1000px', display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
                <h3 style={{ fontSize: '24px', color: '#7A7A7A', fontWeight: 500, marginBottom: '60px', paddingLeft: '50px' }}>
                    Book Studio Time
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto auto auto auto',
                    columnGap: '6px',
                    rowGap: '6px',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>
                    {/* Row 1 */}
                    <div style={{ gridColumn: 1, gridRow: 1 }}><BlackNode text="Launch Site" /></div>
                    <div style={{ gridColumn: 2, gridRow: 1 }}><ArrowR /></div>
                    <div style={{ gridColumn: 3, gridRow: 1 }}><DiamondNode text1="Select Experience" text2="Label or Studio" /></div>
                    <div style={{ gridColumn: 4, gridRow: 1 }}><ArrowR /></div>
                    <div style={{ gridColumn: 5, gridRow: 1 }}><GreyNode text="Studio Landing Page" /></div>
                    <div style={{ gridColumn: 6, gridRow: 1 }}><ArrowR /></div>
                    <div style={{ gridColumn: 7, gridRow: 1 }}><GreyNode text="View Services" /></div>
                    <div style={{ gridColumn: 8, gridRow: 1 }}><ArrowR /></div>
                    <div style={{ gridColumn: 9, gridRow: 1 }}><GreyNode text="Select Studio w/ Engineer" /></div>

                    {/* Row 2 */}
                    <div style={{ gridColumn: 9, gridRow: 2 }}><ArrowD /></div>

                    {/* Row 3 */}
                    <div style={{ gridColumn: 9, gridRow: 3 }}><WhiteNode text="View service details" /></div>
                    <div style={{ gridColumn: 10, gridRow: 3 }}><ArrowR /></div>
                    <div style={{ gridColumn: 11, gridRow: 3 }}><WhiteNode text="Contact tab" /></div>
                    <div style={{ gridColumn: 12, gridRow: 3 }}><ArrowR /></div>
                    <div style={{ gridColumn: 13, gridRow: 3 }}><WhiteNode text="Fill out contact form" /></div>

                    {/* Row 4 */}
                    <div style={{ gridColumn: 13, gridRow: 4 }}><ArrowD /></div>

                    {/* Row 5 */}
                    <div style={{ gridColumn: 13, gridRow: 5 }}><GreenNode text="Submit Request" /></div>

                    {/* Row 6 */}
                    <div style={{ gridColumn: 13, gridRow: 6 }}><ArrowD /></div>

                    {/* Row 7 */}
                    <div style={{ gridColumn: 13, gridRow: 7 }}><WhiteNode text="Request Confirmation" /></div>

                    {/* Row 8 */}
                    <div style={{ gridColumn: 13, gridRow: 8 }}><ArrowD /></div>

                    {/* Row 9 */}
                    <div style={{ gridColumn: 13, gridRow: 9 }}><GreenNode text="1331 Recordz Follow-up" /></div>
                </div>
            </div>
        </div>
    );
}
