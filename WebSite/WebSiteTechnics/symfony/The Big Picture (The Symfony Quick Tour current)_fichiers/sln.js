
var SLNBar = {
    'ads': '\x5B\x7B\x22href\x22\x3A\x22https\x3A\x5C\x2F\x5C\x2Finsight.sensiolabs.com\x5C\x2F\x22,\x22icon\x22\x3A\x22https\x3A\x5C\x2F\x5C\x2Fdoschzharf1i9.cloudfront.net\x5C\x2Fpersonal_assets\x5C\x2Fsln\x5C\x2F30x30\x5C\x2F1991a94e\x2D4351\x2D4af1\x2D88ab\x2D4f17f6d20f45.png\x22,\x22short_text\x22\x3A\x22SensioLabsInsight\x22,\x22medium_text\x22\x3A\x22SensioLabsInsight\x3A\x20regain\x20control\x20of\x20your\x20PHP\x20applications\x22,\x22long_text\x22\x3A\x22SensioLabsInsight\x3A\x20more\x20than\x20100\x20quality\x20checks\x20to\x20regain\x20control\x20of\x20your\x20PHP\x20applications\x22,\x22ga\x22\x3A\x22sl_insight\x22\x7D,\x7B\x22href\x22\x3A\x22https\x3A\x5C\x2F\x5C\x2Fblackfire.io\x5C\x2F\x22,\x22icon\x22\x3A\x22https\x3A\x5C\x2F\x5C\x2Fdoschzharf1i9.cloudfront.net\x5C\x2Fpersonal_assets\x5C\x2Fsln\x5C\x2F30x30\x5C\x2F1c5498dd\x2D0649\x2D4d42\x2Daf4b\x2D1de957825f62.png\x22,\x22short_text\x22\x3A\x22Blackfire.io\x22,\x22medium_text\x22\x3A\x22Blackfire\x20Profiler\x3A\x20Fire\x20up\x20your\x20PHP\x20apps\x20performance\x22,\x22long_text\x22\x3A\x22Blackfire\x20Profiler\x3A\x20Fire\x20up\x20your\x20PHP\x20apps\x20performance\x22,\x22ga\x22\x3A\x22blackfire\x22\x7D\x5D',
    'isAuthenticated': null,
    'uuid': '',
    'fullName': '',
    'needsEmailConfirmation': false,
    'urlConnectHomepage': 'https\x3A\x2F\x2Fconnect.sensiolabs.com\x2F',
    'urlConnectAccount': 'https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fme',
    'urlConnectLogout': 'https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Flogout',
    'urlConnectButton': '',
    'searchActive' : false,
    'searchPlaceholder': 'Search',
    'searchUrl': '',
    'searchUrlAutocomplete': '',
    'searchUrlMethod': 'GET',
    'searchAutocompleteMethod': 'GET',
    'searchApiAlternateShow': '',
    'searchApiImageShow': '',
    'searchAutocompleteSelect': function (event, ui) {
        if (ui.item.path) {
            $("#sln-autocomplete").val(ui.item.label);
            window.location.href = ui.item.path;

            return false;
        }
    },
    'searchAutocompleteRenderItem': function(){},
    'actions': {},
    'separatedActions': {},

    'render': function() {
        template = '\x3Cdiv\x20class\x3D\x22sln\x2Dbar\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dbar\x2Dinner\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dnetwork\x22\x3E\x3Ca\x20href\x3D\x22\x23\x22\x20class\x3D\x22sln\x2Dhidden\x2Dphone\x22\x3ESensioLabs\x3Cspan\x3ENetwork\x3C\x2Fspan\x3E\x3C\x2Fa\x3E\x3Ca\x20href\x3D\x22\x23\x22\x20class\x3D\x22sln\x2Dvisible\x2Dphone\x22\x3ESL\x3Cspan\x3EN\x3C\x2Fspan\x3E\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E\x20__AD__\x20__SEARCH__\x20__USER__\x0A\x20\x20\x20\x20\x3C\x2Fdiv\x3E\x0A\x20\x20\x20\x20__DROPDOWN_NETWORK__\x0A\x20\x20\x20\x20__DROPDOWN_USER__\x0A\x3C\x2Fdiv\x3E';

        template = template.replace(/__AD__/g, this.renderAds())
                           .replace(/__SEARCH__/g, this.renderSearch())
                           .replace(/__USER__/g, this.renderUser())
                           .replace(/__USER_CONTAINER_CLASS__/g, this.needsEmailConfirmation ? 'sln-user sln-user-unconfirmed' : 'sln-user')
                           .replace(/__DROPDOWN_NETWORK__/g, this.renderDropdownNetwork())
                           .replace(/__DROPDOWN_USER__/g, this.renderDropdownUser())
                           .replace(/__DROPDOWN_SEARCH__/g, this.renderDropdownSearch());

        return template;
    },
    'renderSearch': function() {
        template = '\x3Cdiv\x20class\x3D\x22sln\x2Dsearch\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dsearch\x2Ddeactivated\x22\x3E\x3Ca\x20href\x3D\x22\x23\x22\x3E\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fimages\x2Fsln\x2Dv2\x2Fsearch.png\x22\x20\x2F\x3E\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dsearch\x2Dactivated\x20sln\x2Dhidden\x22\x3E\x3Ca\x20href\x3D\x22\x23\x22\x3E\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fimages\x2Fsln\x2Dv2\x2Fsearch\x2Dalt.png\x22\x20\x2F\x3E\x3C\x2Fa\x3E\x3Cform\x20method\x3D\x22__METHOD__\x22\x20action\x3D\x22__ACTION__\x22\x3E\x3Cinput\x20name\x3D\x22q\x22\x20id\x3D\x22sln\x2Dautocomplete\x22\x20type\x3D\x22text\x22\x20placeholder\x3D\x22__PLACEHOLDER__\x22\x20\x2F\x3E\x3C\x2Fform\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E';
        if (this.searchActive == true) {
            return template.replace(/__METHOD__/g, this.searchUrlMethod)
                           .replace(/__ACTION__/g, this.searchUrl)
                           .replace(/__PLACEHOLDER__/g, this.searchPlaceholder);
        }

        return '';
    },
    'renderUser': function() {
        template = '\x3Cdiv\x20class\x3D\x22__USER_CONTAINER_CLASS__\x22\x3E\x20__USER_STATE__\x20\x3C\x2Fdiv\x3E';
        if (this.isAuthenticated) {
            state = '\x3Ca\x20class\x3D\x22sln\x2Duser\x2Dconnected\x22\x20href\x3D\x22\x23\x22\x3E\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fapi\x2Fimages\x2F__UUID__.png\x22\x20width\x3D\x2230\x22\x20height\x3D\x2230\x22\x20alt\x3D\x22__FULLNAME__\x22\x2F\x3E\x3Cspan\x20class\x3D\x22sln\x2Duser\x2Dname\x20sln\x2Dhidden\x2Dphone\x22\x3E__FULLNAME_HTML__\x3C\x2Fspan\x3E\x3C\x2Fa\x3E';
            state = state.replace(/__UUID__/g, this.uuid)
                         .replace(/__FULLNAME__/g, this.fullName)
                         .replace(/__FULLNAME_HTML__/g, this.fullName + (this.needsEmailConfirmation ? ' <span style="font-size: 9px">unconfirmed</span>' : ''));

            return template.replace(/__USER_STATE__/g, state);
        } else if (!this.isAuthenticated && this.urlConnectButton != '') {
            state = '\x3Ca\x20href\x3D\x22__CONNECT_URL__\x22\x20class\x3D\x22sln\x2Dconnect\x22\x3E\x20Connect\x20\x3C\x2Fa\x3E';
            state = state.replace(/__CONNECT_URL__/g, this.urlConnectButton);

            return template.replace(/__USER_STATE__/g, state);
        }

        return '';
    },
    'renderDropdownNetwork': function() {
        return '\x3Cdiv\x20class\x3D\x22sln\x2Ddropdown\x2Dnetwork\x20sln\x2Ddropdown\x20sln\x2Dhidden\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dcontainer\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Drow\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan6\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Drow\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan3\x22\x3E\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fimages\x2Fsln\x2Dv2\x2Fsensiolabs.png\x22\x20alt\x3D\x22SensioLabs\x22\x20\x2F\x3E\x3Cp\x3ESince\x201998,\x20SensioLabs\x20has\x20been\x20promoting\x20the\x20Open\x2DSource\x20software\x20movement\x20by\x20providing\x20quality\x20and\x20performant\x20web\x20application\x20development\x20products,\x20trainings,\x20\x20and\x20consulting.\x20SensioLabs\x20also\x20supports\x20multiple\x20important\x20Open\x2DSource\x20projects.\x20\x3Cbr\x20\x2F\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_learn_more\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Fen\x22\x3ELearn\x20more\x3C\x2Fa\x3E\x3C\x2Fp\x3E\x3Cdiv\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_sl_international\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Fen\x22\x3EInternational\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E\x3Cul\x20class\x3D\x22sln\x2Dwebsites\x22\x3E\x3Cli\x3ELocal\x3A\x3C\x2Fli\x3E\x3Cli\x20class\x3D\x22first\x22\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_sl_FR\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Ffr\x22\x3EFrance\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_sl_DE\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.de\x2F\x22\x3EDeutschland\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_sl_UK\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.co.uk\x2F\x22\x3EUK\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3C\x2Ful\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan3\x20sln\x2Dads\x22\x3E\x3Ch2\x3EIn\x20the\x20Spotlight\x3C\x2Fh2\x3E\x3Cdiv\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_insight_thumb\x22\x20href\x3D\x22https\x3A\x2F\x2Finsight.sensiolabs.com\x2F\x22\x3E\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fimages\x2Fsln\x2Dv2\x2Fsensiolabsinsight.png\x22\x20alt\x3D\x22SensioLabsInsight\x22\x20\x2F\x3E\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_blackfire_thumb\x22\x20href\x3D\x22https\x3A\x2F\x2Fblackfire.io\x22\x3E\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fimages\x2Fsln\x2Dv2\x2Fblackfire.png\x22\x20alt\x3D\x22Blackfire\x22\x20\x2F\x3E\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan6\x20sln\x2Dproducts\x2Dlisting\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Drow\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan3\x22\x3E\x3Ch2\x3EOpen\x20Source\x3C\x2Fh2\x3E\x3Cul\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_sf\x22\x20href\x3D\x22http\x3A\x2F\x2Fsymfony.com\x2F\x22\x3ESymfony\x20\x2D\x20Web\x20framework\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_twig\x22\x20href\x3D\x22http\x3A\x2F\x2Ftwig.sensiolabs.org\x2F\x22\x3ETwig\x20\x2D\x20Templating\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x20\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_silex\x22\x20href\x3D\x22http\x3A\x2F\x2Fsilex.sensiolabs.org\x2F\x22\x3ESilex\x20\x2D\x20Micro\x2Dframework\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_swift\x22\x20href\x3D\x22http\x3A\x2F\x2Fwww.swiftmailer.org\x2F\x22\x3ESwift\x20Mailer\x20\x2D\x20E\x2DMailing\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3C\x2Ful\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan3\x22\x3E\x3Ch2\x3EProducts\x3C\x2Fh2\x3E\x3Cul\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_insight\x22\x20href\x3D\x22https\x3A\x2F\x2Finsight.sensiolabs.com\x22\x3EInsight\x3A\x20PHP\x20Quality\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_profiler\x22\x20href\x3D\x22https\x3A\x2F\x2Fblackfire.io\x22\x3EBlackfire\x3A\x20Web\x20App\x20performance\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_security_checker\x22\x20href\x3D\x22https\x3A\x2F\x2Fsecurity.sensiolabs.org\x2F\x22\x3ESecurity\x20checker\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3C\x2Ful\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Drow\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan3\x22\x3E\x3Ch2\x3ESolutions\x20\x26amp\x3B\x20Services\x3C\x2Fh2\x3E\x3Cul\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_training\x22\x20href\x3D\x22http\x3A\x2F\x2Ftraining.sensiolabs.com\x2F\x22\x3ETraining\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_certification\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Fen\x2Fsymfony\x2Fcertification.html\x22\x3ECertification\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_services\x22\x20\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Fen\x2Fservices\x2Fservices.html\x22\x3ETechnical\x20Solutions\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_support\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Fen\x2Fsupport\x2Fsensiolabssupport.html\x22\x3ESupport\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_experts\x22\x20href\x3D\x22http\x3A\x2F\x2Fexpert.sensiolabs.com\x2F\x22\x3EExperts\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3C\x2Ful\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan3\x22\x3E\x3Ch2\x3ECommunity\x20\x26amp\x3B\x20Network\x3C\x2Fh2\x3E\x3Cul\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_connect\x22\x20href\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2F\x22\x3ECommunity\x20Network\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_live\x22\x20href\x3D\x22http\x3A\x2F\x2Flive.symfony.com\x22\x3EConferences\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_youtube\x22\x20href\x3D\x22https\x3A\x2F\x2Fwww.youtube.com\x2Fuser\x2FSensioLabs\x22\x3EVideos\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_partners\x22\x20href\x3D\x22http\x3A\x2F\x2Fsensiolabs.com\x2Fen\x2Fpartnership\x2Foverview.html\x22\x3EPartners\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3Cli\x3E\x3Ca\x20data\x2Dga\x3D\x22sln_job_board\x22\x20href\x3D\x22http\x3A\x2F\x2Fjobs.sensiolabs.com\x2F\x22\x3EJob\x20Board\x3C\x2Fa\x3E\x3C\x2Fli\x3E\x3C\x2Ful\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E';
    },
    'renderDropdownUser': function() {
        template = '\x3Cdiv\x20class\x3D\x22sln\x2Ddropdown\x2Duser\x20sln\x2Ddropdown\x20sln\x2Dhidden\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dcontainer\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Drow\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Duser\x2Dactions\x20sln\x2Dspan3\x22\x3E\x3Ch2\x3EYour\x20actions\x3C\x2Fh2\x3E\x3Cul\x3E\x20__ACTIONS__\x20\x3C\x2Ful\x3E\x3C\x2Fdiv\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dspan9\x20sln\x2Dnotifications\x2Dcontainer\x22\x3E\x3Ch2\x3EYour\x20notifications\x3A\x3C\x2Fh2\x3E\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20In\x20order\x20to\x20see\x20your\x20notifications,\x20please\x20\x3Ca\x20href\x3D\x22https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Flogin\x22\x3Elogin\x20to\x20your\x20SensioLabs\x20account\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E';
        if (!this.isAuthenticated) {
            return '';
        }

        var processActions = function(actions) {
            actionList = '';
            for (key in actions) {
                action = actions[key];
                actionTemplate = '\x3Cli\x3E\x3Ca\x20href\x3D\x22__HREF__\x22\x3E__TEXT__\x3C\x2Fa\x3E\x3C\x2Fli\x3E';
                actionTemplate = actionTemplate.replace(/__HREF__/g, action.url);
                actionTemplate = actionTemplate.replace(/__TEXT__/g, action.label);

                actionList += actionTemplate;
            }

            return actionList;
        }

        actions = processActions(this.actions);
        separated = processActions(this.separatedActions);
        if (separated != '') {
            actions += '\x3Cli\x20class\x3D\x22sln\x2Dseparator\x22\x3E\x3C\x2Fli\x3E';
            actions += separated;
        }

        return template.replace(/__ACTIONS__/g, actions);
    },
    'renderAds': function() {
        var ads = jQuery.parseJSON(this.ads);
        if (ads && ads.length > 0) {
            var ad = ads[Math.floor((Math.random()*ads.length))];
            template = '\x3Cdiv\x20class\x3D\x22sln\x2Dad\x22\x3E\x3Ca\x20href\x3D\x22__HREF__\x22\x20data\x2Dga\x3D\x22__GA__\x22\x20class\x3D\x22sln\x2Dvisible\x2Dphone\x22\x3E\x3Cimg\x20src\x3D\x22__ICON__\x22\x20\x2F\x3E__TEXT_SHORT__\x3C\x2Fa\x3E\x3Ca\x20href\x3D\x22__HREF__\x22\x20data\x2Dga\x3D\x22__GA__\x22\x20class\x3D\x22sln\x2Dvisible\x2Dtablet\x22\x3E\x3Cimg\x20src\x3D\x22__ICON__\x22\x20\x2F\x3E__TEXT_MEDIUM__\x3C\x2Fa\x3E\x3Ca\x20href\x3D\x22__HREF__\x22\x20data\x2Dga\x3D\x22__GA__\x22\x20class\x3D\x22sln\x2Dvisible\x2Ddesktop\x22\x3E\x3Cimg\x20src\x3D\x22__ICON__\x22\x20\x2F\x3E__TEXT_LONG__\x3C\x2Fa\x3E\x3C\x2Fdiv\x3E';
            return template.replace(/__HREF__/g, ad.href)
                           .replace(/__ICON__/g, ad.icon)
                           .replace(/__TEXT_SHORT__/g, ad.short_text)
                           .replace(/__TEXT_MEDIUM__/g, ad.medium_text)
                           .replace(/__TEXT_LONG__/g, ad.long_text)
                           .replace(/__GA__/g, ad.ga);
        }

        return '';
    },
    'renderDropdownSearch': function() {
        if (!this.searchActive) {
            return '';
        }

        return '\x3Cdiv\x20class\x3D\x22sln\x2Ddropdown\x20sln\x2Ddropdown\x2Dsearch\x20sln\x2Dhidden\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Dcontainer\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Drow\x22\x3E\x3Cdiv\x20class\x3D\x22sln\x2Doffset9\x20sln\x2Dspan3\x20sln\x2Dautocomplete\x2Dcontainer\x22\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E\x3C\x2Fdiv\x3E';
    },
    'bindEvents': function() {
        jQuery('.sln-network a').click(function(e) {
            e.preventDefault();
            jQuery('.sln-dropdown-user').addClass('sln-hidden');
            jQuery('.sln-dropdown-network').toggleClass('sln-hidden sln-open');
            jQuery('.sln-search-activated').addClass('sln-hidden');
            jQuery('.sln-search-deactivated').removeClass('sln-hidden');
            jQuery('#sln').height($('.sln-bar').outerHeight());

            jQuery('.sln-dropdown-network.sln-open a').click(function () {
                _gaq.push(['sln._trackEvent', 'Toolbar', 'click', 'ad_'+jQuery(this).attr('data-ga')]);
            });
        });

        if (this.isAuthenticated) {
            jQuery('.sln-user a').click(function(e) {
                e.preventDefault();
                jQuery('.sln-dropdown-network').addClass('sln-hidden');
                jQuery('.sln-dropdown-user').toggleClass('sln-hidden');
                jQuery('.sln-search-activated').addClass('sln-hidden');
                jQuery('.sln-search-deactivated').removeClass('sln-hidden');
                jQuery('#sln').height($('.sln-bar').outerHeight());
            });
        }
        if (this.searchActive) {
            jQuery('.sln-search a').click(function(e) {
                e.preventDefault();
                jQuery('.sln-dropdown-user').addClass('sln-hidden');
                jQuery('.sln-dropdown-network').addClass('sln-hidden');
                jQuery('.sln-search-activated').toggleClass('sln-hidden');
                jQuery('.sln-search-deactivated').toggleClass('sln-hidden');
                jQuery('#sln').height($('.sln-bar').outerHeight());
            });

            this.bindSearch();
        }

        jQuery('.sln-ad a').click(function() {
            _gaq.push(['sln._trackEvent', 'Ads', 'Ads', 'ad_'+jQuery(this).attr('data-ga')]);
        });

            },
        'loadNotifications': function() {
        jQuery('.sln-notification-count').remove();
        jQuery.ajax('https\x3A\x2F\x2Fconnect.sensiolabs.com\x2Fnotifications', {
            headers: {'Accept': 'application/json'},
            xhrFields: {
                withCredentials: true
            },
            statusCode: {
                200: function(data, textStatus, jqXHR) {
                    if ('object' !== typeof data) {
                        data = jQuery.parseJSON(data);
                    }
                    jQuery('.sln-notifications-container').html(data.body);
                    if (data.count > 0) {
                        jQuery('.sln-user-connected').append('<span class="sln-notification-count">'+data.count+'</span>')
                    }
                    jQuery('#sln').height(jQuery('.sln-bar').outerHeight(true));
                },
                401: function(data, textStatus, jqXHR) {
                }
            }
        })
    },
        'bindSearch': function() {
        $.widget("custom.slncomplete", $.ui.autocomplete, {
            _renderMenu: function (ul, items) {
                ul.addClass('sln-autocomplete-menu');
                ul.removeClass("ui-autocomplete");

                var self = this, currentCategory = "";
                var group = "primary";
                var first = '';

                $.each (items, function (index, item) {
                    if (item.category != currentCategory) {
                        ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                        currentCategory = item.category;
                        if ("primary" == group) {
                            group = "secondary";
                        } else {
                            group = "primary";
                        }
                        first = 'first';
                    }
                    self._renderItem({ ul: ul, item: item, group: group, first: first });
                    first = '';
                });

                ul.prepend("<li class=\"all-results primary\"><a href=\""+SLNBar.searchUrl+"?q="+$('#sln-autocomplete').val()+"\">Show all results...</a></li>");
                $('.sln_autocomplete .all-results a').click(function(e){window.location = $(this).attr('href');e.preventDefault();});
            }
        });
        if (0 != $("#sln-autocomplete").length) {
            $("#sln-autocomplete").slncomplete({
                source:    this.searchUrlAutocomplete,
                minLength: 2,
                select: SLNBar.searchAutocompleteSelect
            }).data("slncomplete")._renderItem = SLNBar.searchAutocompleteRenderItem;
        }
    }
}

var _gaq = _gaq || [];
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

        jQuery.get('https\x3A\x2F\x2Fsymfony.com\x2Fsln_customiser.js', function (data) {
        jQuery(document).ready(function() {
            if (null === SLNBar.isAuthenticated) {
                SLNBar.isAuthenticated = false;
                eval(data);
            }
        })
    });

_gaq.push(['sln._setAccount', 'UA-1221949-8']);
_gaq.push(['sln._setAllowLinker', true]);
_gaq.push(['sln._setCustomVar', 1, 'is_connected', 'no']);
_gaq.push(['sln._trackPageview']);

(function() {
    var crit = document.createElement('script'); crit.type = 'text/javascript'; crit.async = true;
    crit.src = '//static.criteo.net/js/ld/ld.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(crit, s);
})();

window.criteo_q = window.criteo_q || [];
window.criteo_q.push (
    { event: "setAccount", account: 14086 },
    { event: "viewHome"}
);
