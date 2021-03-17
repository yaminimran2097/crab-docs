import { useRef, useEffect } from 'react';
import {
    Button,
    Container
} from 'react-bootstrap';
import Parallax from "parallax-js";
import { useTranslation } from 'react-i18next';

import Animate from '../../Animate';
import Divider from '../../components/Svg/Divider';
import styles from './style.module.scss';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import mobileCrabImg from './img/mobile-crab.png';
import mobileCrabTitleImg from './img/mobile-crab-title.png';
import mobileCrabCoolImg from './img/mobile-crab-cool.png';
import mobileTokenLockImg from './img/mobile-token-lock.png';
import mobileTokenSaveImg from './img/moble-token-save.png';
import mobileTokenCringImg from './img/mobile-token-cring.png';
import mobileKusamaImg from './img/mobile-kusama.png';

import desktopCrabImg from './img/desktop-crab.png';
import desktopCrabTitleImg from './img/desktop-crab-title.png';
import desktopCrabCoolImg from './img/desktop-crab-cool.png';
import desktopTokenLockImg from './img/desktop-token-lock.png';
import desktopTokenSaveImg from './img/desktop-token-save.png';
import desktopTokenCringImg from './img/desktop-token-cring.png';
import desktopKusamaImg from './img/desktop-kusama.png';
import desktopParticipate01 from './img/participate-content-01.png';
import desktopParticipate02 from './img/participate-content-02.png';

const Home = () => {
    const ref = useRef();
    const { i18n } = useTranslation();

    const DesktopTitleCN = (
        <div data-depth="0.2" className={styles.containerTitleCN}>
            <div className={styles.title} style={{ width: '1046px' }}>Crab Network</div>
            <div className={styles.subtitle}>KUSAMA 的跨链枢纽</div>
        </div>
    );

    const DesktopTitleEN = (
        <img data-depth="0.2" alt='crab title' src={desktopCrabTitleImg} className={styles.crabTitleImgDesktop} />
    );

    useEffect(() => {
        if (ref.current) {
            new Parallax(ref.current, {
                hoverOnly: true,
                pointerEvents: true,
            });
        }
    }, [ref]);

    return (
        <div className={styles.container}>
            <PageHeader />

            <div className={styles.constent}>

                <Container>
                    <img alt='...' src={mobileCrabImg} className={styles.crabImg} />
                    <img alt='...' src={mobileCrabTitleImg} className={styles.crabTitleImg} />

                    <div className={styles.parallaxContainer} ref={ref} >
                        <img data-depth="0.1" alt='crab' src={desktopCrabImg} className={styles.crabImgDesktop} />
                        {i18n.language && i18n.language.toLowerCase() === 'zh-cn' ? DesktopTitleCN : DesktopTitleEN}
                    </div>
                    <div className={styles.crabNetDesc}>
                        <Animate>
                            Crab Network (Crab for short) is a Canary Network for Darwinia. The positioning of Crab is similar to Polkadot’s Kusama Network. Expect Chaos is a reasonable expectation
                        </Animate>
                    </div>
                </Container>

                {/* Econmic Model */}

                <Container className={`d-sm-none`}>
                    <Animate>
                        <img alt='crab cool' src={mobileCrabCoolImg} className={styles.crabCoolImg} />
                    </Animate>

                    <Animate delay={50}>
                        <div className={styles.economicTitle}>
                            Economic Model
                        </div>
                    </Animate>

                    <Animate delay={50}>
                        <div className={styles.economicDesc}>
                            <div className={styles.desc1} >Crab will be designed as a long-term testnet, but it cannot be ruled out that it will stop running due to unexpected conditions or failures.Crab is a valuable network. Its purpose is mainly to test and perform various radical experiments, and especially to simulate the real economic environment.</div>
                            <div className={styles.desc2} >Crab’s tokens are CRING and CKTON, with the same parameters as Darwinia Mainnet, and use the same Staking mechanism and inflation model(link). The initial supply of CRING is 2000M, and the supply of CKTON is 0.</div>
                        </div>
                    </Animate>

                    <Animate delay={50}>
                        <Button variant='light' className={styles.readMoreBtn}>
                            <span className={styles.content}>Read More</span>
                        </Button>
                    </Animate>
                </Container>

                <Container >
                    <div className='d-none d-sm-flex justify-content-center'>
                        <Animate>
                            <img alt='crab cool' src={desktopCrabCoolImg} style={{ width: '1100px', marginLeft: '-600px' }} />
                        </Animate>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <Animate delay={100}>
                                <div className={styles.economicTitle}>
                                    Economic Model
                                </div>
                            </Animate>
                            <Animate delay={200}>
                                <div className={styles.economicDesc}>
                                    <div className={styles.desc1} >Crab will be designed as a long-term testnet, but it cannot be ruled out that it will stop running due to unexpected conditions or failures.Crab is a valuable network. Its purpose is mainly to test and perform various radical experiments, and especially to simulate the real economic environment.</div>
                                    <div className={styles.desc2} >Crab’s tokens are CRING and CKTON, with the same parameters as Darwinia Mainnet, and use the same Staking mechanism and inflation model(link). The initial supply of CRING is 2000M, and the supply of CKTON is 0.</div>
                                </div>
                            </Animate>
                            <Animate delay={300}>
                                <Button variant='light' className={styles.readMoreBtn}>
                                    <span className={styles.content}>Read More</span>
                                </Button>
                            </Animate>
                            <div style={{ height: '30%' }}></div>
                        </div>
                    </div>
                </Container>

                <div className={`d-sm-none`} style={{ height: '40px' }}></div>

                <div className={styles.wareShadowWrapper}>
                    <Divider />
                    <div className={styles.wareShadow}>
                        {/* Parachain Auction */}

                        <div className='d-sm-none'>
                            <Animate delay={50}>
                                <div className={styles.parachainAuction}>
                                    Parachain Auction
                                </div>
                            </Animate>
                            <Animate delay={50}>
                                <div className={styles.crowdfunding}>
                                    Crowdfunding
                                </div>
                            </Animate>

                            <Animate delay={50}>
                                <div className={styles.auctionCard}>
                                    <img alt='...' src={mobileTokenLockImg} style={{ width: '209px', height: '134px' }} />
                                    <div className={styles.content}>
                                        KSM holders lock their tokens on Kusama for a period of time (6, 12 or 24 months) to help Darwinia rent a slot. In return for these KSM holders, participants will receive CRINGs as rewards.
                                    </div>
                                </div>
                            </Animate>
                            <Animate delay={50}>
                                <div className={styles.auctionCard}>
                                    <img alt='...' src={mobileTokenSaveImg} style={{ width: '209px', height: '134px' }} />
                                    <div className={styles.content}>
                                        Your token lock takes place on the chain in a decentralized manner and will be returned to the holder after the lock-up period, so you don’t have to worry about the security of the token.
                                    </div>
                                </div>
                            </Animate>
                            <Animate delay={50}>
                                <div className={styles.auctionCard}>
                                    <img alt='...' src={mobileTokenCringImg} style={{ width: '209px', height: '134px' }} />
                                    <div className={styles.content}>
                                        CRING is the token of the Crab network. Holding CRINGs can participate in the staking and on-chain governance of the Crab network.
                                    </div>
                                </div>
                            </Animate>
                        </div>

                        <div className='d-none d-sm-block'>
                            <Animate delay={100}>
                                <div className={styles.parachainAuction}>
                                    Parachain Auction
                                </div>
                            </Animate>
                            <Animate delay={200}>
                                <div className={styles.crowdfunding}>
                                    Crowdfunding
                                </div>
                            </Animate>

                            <Animate delay={300}>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className={styles.auctionCard}>
                                        <img alt='...' src={desktopTokenLockImg} style={{ width: '209px', height: '134px' }} />
                                        <div className={styles.content}>
                                            KSM holders lock their tokens on Kusama for a period of time (6, 12 or 24 months) to help Darwinia rent a slot. In return for these KSM holders, participants will receive CRINGs as rewards.
                                        </div>
                                    </div>
                                    <div className={styles.auctionCard}>
                                        <img alt='...' src={desktopTokenSaveImg} style={{ width: '209px', height: '134px' }} />
                                        <div className={styles.content}>
                                            Your token lock takes place on the chain in a decentralized manner and will be returned to the holder after the lock-up period, so you don’t have to worry about the security of the token.
                                        </div>
                                    </div>
                                    <div className={styles.auctionCard}>
                                        <img alt='...' src={desktopTokenCringImg} style={{ width: '209px', height: '134px' }} />
                                        <div className={styles.content}>
                                            CRING is the token of the Crab network. Holding CRINGs can participate in the staking and on-chain governance of the Crab network.
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                        </div>

                        {/* How to participate */}

                        <div className='d-sm-none'>
                            <Animate delay={50}>
                                <div className={styles.participate}>
                                    How to participate
                                </div>
                            </Animate>
                            <Animate delay={50}>
                                <div className={styles.contentBox}>
                                    <div className={styles.content}>
                                        Prepare your KSMs. If it is in the bond state, the unbond operation must be performed at least seven days in advance.
                                    </div>
                                </div>
                            </Animate>
                            <Animate delay={100}>
                                <div className={styles.contentBox}>
                                    <div className={styles.content}>
                                        Participate in crowdfunding. After the crowdfunding starts, you can participate in the crowdfunding through polkadot.js.org and apps.
                                    </div>
                                </div>
                            </Animate>

                            <div className={styles.kusama}>
                                <Animate delay={50}>
                                    <img alt='...' src={mobileKusamaImg} className={styles.title} />
                                </Animate>
                                <Animate delay={50}>
                                    <div className={styles.content}>
                                        Kusama is a multi-chain network. Parachains can be accessed through slots. Parachains and Kusama jointly form an interoperable blockchain network. Kusama guarantees the security of the entire network, while parachains provide a variety of capabilities for the entire network. All parachains must participate in the parachain auction to obtain the right to rent a slot.
                                    </div>
                                    <div className={styles.content}>
                                        The Crab network needs to crowdfund enough KSMs to win the parachain auction. Crab Network chooses to crowdfund KSMs in a trustless way. During Crab’s parachain lease, these KSMs will be “locked” in the Kusama relay chain.
                                    </div>
                                </Animate>
                                <Animate delay={50}>
                                    <Button variant='light' className={styles.readMoreBtn}>
                                        <span className={styles.content}>Read More</span>
                                    </Button>
                                </Animate>
                            </div>
                        </div>

                        <div className={`d-none d-sm-block ${styles.participateZoom}`}>
                            <Animate delay={100}>
                                <div className={styles.participate}>
                                    How to participate
                                </div>
                            </Animate>

                            <Animate delay={200}>
                                <div className='d-flex justify-content-center'>
                                    <div className={styles.contentBox}>
                                        <img alt='...' src={desktopParticipate01} style={{ width: '100px', height: '108px' }} />
                                        <div className={styles.content}>
                                            Prepare your KSMs. If it is in the bond state, the unbond operation must be performed at least seven days in advance.
                                        </div>
                                    </div>
                                    <div className={styles.contentBox} style={{ width: '554px', height: '142px' }} >
                                        <img alt='...' src={desktopParticipate02} style={{ width: '110px', height: '108px' }} />
                                        <div className={styles.content}>
                                            Participate in crowdfunding. After the crowdfunding starts, you can participate in the crowdfunding through polkadot.js.org and apps.
                                        </div>
                                    </div>
                                </div>
                            </Animate>

                            <div className={styles.kusama}>
                                <Animate delay={100}>
                                    <img alt='...' src={desktopKusamaImg} style={{ width: '280px', height: '66px', marginBottom: '30px' }} />
                                </Animate>
                                <Animate delay={200}>
                                    <div className={styles.content}>
                                        Kusama is a multi-chain network. Parachains can be accessed through slots. Parachains and Kusama jointly form an interoperable blockchain network. Kusama guarantees the security of the entire network, while parachains provide a variety of capabilities for the entire network. All parachains must participate in the parachain auction to obtain the right to rent a slot.
                                    </div>
                                    <div className={styles.content}>
                                        The Crab network needs to crowdfund enough KSMs to win the parachain auction. Crab Network chooses to crowdfund KSMs in a trustless way. During Crab’s parachain lease, these KSMs will be “locked” in the Kusama relay chain.
                                    </div>
                                </Animate>
                                <Animate delay={300}>
                                    <Button variant='light' className={styles.readMoreBtn}>
                                        <span className={styles.content}>Read More</span>
                                    </Button>
                                </Animate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PageFooter />
        </div>
    )
};

export default Home;
