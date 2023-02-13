import { BowlinePage } from "./pages/knots/BowlinePage";
import { CloveHitchPage } from "./pages/knots/CloveHitchPage";
import { DoubleSheetBendPage } from "./pages/knots/DoubleSheetBendPage";
import { Fig8Page } from "./pages/knots/Fig8Page";
import { ReefKnotPage } from "./pages/knots/ReefKnotPage";
import { RollingHitchPage } from "./pages/knots/RollingHitchPage";
import { RoundTurnPage } from "./pages/knots/RoundTurnPage";
import { SheetBendPage } from "./pages/knots/SheetBendPage";

export const knots = [
    {
        name: 'Clove Hitch',
        url: '/knots/cloveHitch',
        image: '/assets/knots/cloveHitch.png',
        description: 'Clove Hitch ...',
        pageComponent: <CloveHitchPage />
    }, {
        name: 'Round Turn & Two Half Hitches',
        url: '/knots/roundTurn',
        image: '/assets/knots/roundTurn.png',
        description: 'Round Turn & Two Half Hitches ...',
        pageComponent: <RoundTurnPage />
    }, {
        name: 'Reef Knot',
        url: '/knots/reefKnot',
        image: '/assets/knots/reefKnot.png',
        description: 'Reef Knot ...',
        pageComponent: <ReefKnotPage />
    }, {
        name: 'Bowline',
        url: '/knots/bowline',
        image: '/assets/knots/bowline.png',
        description: 'Bowline ...',
        pageComponent: <BowlinePage />
    }, {
        name: 'Sheet Bend',
        url: '/knots/sheetBend',
        image: '/assets/knots/sheetBend.png',
        description: 'Sheet Bend ...',
        pageComponent: <SheetBendPage />
    }, {
        name: 'Double Sheet Bend',
        url: '/knots/doubleSheetBend',
        image: '/assets/knots/doubleSheetBend.png',
        description: 'Double Sheet Bend ...',
        pageComponent: <DoubleSheetBendPage />
    }, {
        name: 'Figure-eight knot',
        url: '/knots/fig8',
        image: '/assets/knots/fig8.png',
        description: 'Figure-eight knot ...',
        pageComponent: <Fig8Page />
    }, {
        name: 'Rolling Hitch',
        url: '/knots/rollingHitch',
        image: '/assets/knots/rollingHitch.png',
        description: 'Rolling Hitch ...',
        pageComponent: <RollingHitchPage />
    }
]