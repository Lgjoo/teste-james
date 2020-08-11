import { transition, trigger, query, style, animate, group } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => isLeft', slideTo('left') ),
        transition('* => isRight', slideTo('right') ),
        transition('isRight => *', slideTo('left') ),
        transition('isLeft => *', slideTo('right') )
    ]);

function slideTo(direcao) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                [direcao]: 0,
                width: '80%'
            })
        ], optional),
        query(':enter', [
            style({ [direcao]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direcao]: '100%'}))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direcao]: '0%'}))
            ])
        ]),
    ];
}