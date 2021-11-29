mos = {
    "objectName": "PLUSCWODSPOINT",
    "className": "psdi.plusc.app.pluscds.PlusCWODSPointSet",
    "description": "Maximo Plus - Data Sheet - WO Cal Point Rows",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCWODSPOINTID",
    "primaryKeyColumns": [
        "PLUSCWODSPOINTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASFOUNDERROR1",
            "required": false,
            "persistent": true,
            "title": "As Found Error 1",
            "remarks": "The As Found tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDERROR2",
            "required": false,
            "persistent": true,
            "title": "As Found Error 2",
            "remarks": "The As Found tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDERROR3",
            "required": false,
            "persistent": true,
            "title": "As Found Error 3",
            "remarks": "The As Found tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDERROR4",
            "required": false,
            "persistent": true,
            "title": "As Found Error 4",
            "remarks": "The As Found tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDINPUT",
            "required": false,
            "persistent": true,
            "title": "As Found Input",
            "remarks": "The As Found input value for an analog instrument.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDOUTERROR",
            "required": false,
            "persistent": true,
            "title": "As Found Output Error",
            "remarks": "The As Found output error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDOUTPUT",
            "required": false,
            "persistent": true,
            "title": "As Found Output",
            "remarks": "The As Found output value for an analog instrument.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDPROERROR",
            "required": false,
            "persistent": true,
            "title": "As Found pro Error",
            "remarks": "The As Found process error for the calibration point of the asset being calibrated. If the process error is not expressed in input or output units, you must enter a conversion factor in the Scaling Factor field to convert engineering units to user specified units.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDRESPONSE",
            "required": false,
            "persistent": true,
            "title": "As Found Response",
            "remarks": "The As Found response value for an instrument.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDRESPONSEEU",
            "required": false,
            "persistent": true,
            "title": "As Found Response Engineering Units",
            "remarks": "Engineering units of the As Found response value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDSETPOINT",
            "required": false,
            "persistent": true,
            "title": "As Found Set Point",
            "remarks": "The As Found value at which a discrete device should actuate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL1LOWER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 1 Lower",
            "remarks": "The minimum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL1UPPER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 1 Upper",
            "remarks": "The maximum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL2LOWER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 2 Lower",
            "remarks": "The minimum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL2UPPER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 2 Upper",
            "remarks": "The maximum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL3LOWER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 3 Lower",
            "remarks": "The minimum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL3UPPER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 3 Upper",
            "remarks": "The maximum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL4LOWER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 4 Lower",
            "remarks": "The minimum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL4UPPER",
            "required": false,
            "persistent": true,
            "title": "AsFound Tolerance 4 Upper",
            "remarks": "The maximum specified As Found tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTERROR1",
            "required": false,
            "persistent": true,
            "title": "As Left Error 1",
            "remarks": "The As Left tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTERROR2",
            "required": false,
            "persistent": true,
            "title": "As Left Error 2",
            "remarks": "The As Left tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTERROR3",
            "required": false,
            "persistent": true,
            "title": "As Left Error 3",
            "remarks": "The As Left tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTERROR4",
            "required": false,
            "persistent": true,
            "title": "As Left Error 4",
            "remarks": "The As Left tolerance error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTINPUT",
            "required": false,
            "persistent": true,
            "title": "As Left Input",
            "remarks": "The As Left input value for an analog instrument.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTOUTPUT",
            "required": false,
            "persistent": true,
            "title": "As Left Output",
            "remarks": "The As Left output value for an analog instrument.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTPROERROR",
            "required": false,
            "persistent": true,
            "title": "As Left pro Error",
            "remarks": "The As Left process error for the calibration point of the asset being calibrated. If the process error is not expressed in input or output units, you must enter a conversion factor in the Scaling Factor field to convert engineering units to user specified units.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTRESPONSE",
            "required": false,
            "persistent": true,
            "title": "As Left Response",
            "remarks": "As Left Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTRESPONSEEU",
            "required": false,
            "persistent": true,
            "title": "As Left Response Engineering Units",
            "remarks": "The As Left response value for an instrument.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTSETPOINT",
            "required": false,
            "persistent": true,
            "title": "As Left Set Point",
            "remarks": "The As Left value at which a discrete device should actuate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL1LOWER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 1 Lower",
            "remarks": "The minimum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL1UPPER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 1 Upper",
            "remarks": "The maximum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL2LOWER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 2 Lower",
            "remarks": "The minimum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL2UPPER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 2 Upper",
            "remarks": "The maximum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL3LOWER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 3 Lower",
            "remarks": "The minimum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL3UPPER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 3 Upper",
            "remarks": "The maximum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL4LOWER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 4 Lower",
            "remarks": "The minimum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL4UPPER",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 4 Upper",
            "remarks": "The maximum specified As Left tolerance value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTION",
            "required": false,
            "persistent": true,
            "title": "Direction",
            "remarks": "Direction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSPLANNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Data Sheet",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "INPUTPERCENT",
            "required": false,
            "persistent": true,
            "title": "Input Percent",
            "remarks": "Input Percent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTVALUE",
            "required": false,
            "persistent": true,
            "title": "Input Value",
            "remarks": "The user specified input value for each analog calibration point.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRSEQ",
            "required": true,
            "persistent": true,
            "title": "Asset Function Sequence",
            "remarks": "The user entered reference number for the asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISADDED",
            "required": true,
            "persistent": true,
            "title": "Is Added",
            "remarks": "Is this an added point?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDKEY",
            "required": false,
            "persistent": true,
            "title": "Long Description ID",
            "remarks": "Long Description Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "OUTPUTVALUE",
            "required": false,
            "persistent": true,
            "title": "Output Value",
            "remarks": "The value of the desired output for an analog calibration point.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLANTYPE",
            "required": false,
            "persistent": true,
            "title": "Data Sheet Type",
            "remarks": "Point Plan Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINT",
            "required": true,
            "persistent": true,
            "title": "Calibration Point",
            "remarks": "The user entered reference number for the calibration requirement for each asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Point Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1LOWER",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal 1 Lower",
            "remarks": "The minimum specified nominal value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1UPPER",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal 1 Upper",
            "remarks": "The maximum specified nominal value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETPOINTACTION",
            "required": false,
            "persistent": true,
            "title": "Set Point Action Switch Action",
            "remarks": "The wanted behavior of the discrete device, such as a switch that turns on or off at the specified set point.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETPOINTVALUE",
            "required": false,
            "persistent": true,
            "title": "Set Point Value",
            "remarks": "The value of the desired set point for a discrete calibration point.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order Number",
            "remarks": "Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "INSTRUMENTFUNCTION",
            "required": false,
            "persistent": false,
            "title": "Function",
            "remarks": "Asset Function Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRUMENTDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTRCALRANGEEUA",
            "required": false,
            "persistent": false,
            "title": "Asset Function  Calibration  Range  Engineering Units",
            "remarks": "Instrument Calibration Range EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGEEUD",
            "required": false,
            "persistent": false,
            "title": "Asset Function  Calibration  Range  Engineering Units",
            "remarks": "Instrument Calibration Range EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGEEU",
            "required": false,
            "persistent": false,
            "title": "Asset Function Output Range  Engineering Units",
            "remarks": "Instrument Output Range EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOLERANCEEU",
            "required": false,
            "persistent": false,
            "title": "Asset Function Output Range  Engineering Units",
            "remarks": "Instrument Output Range EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEU",
            "required": false,
            "persistent": false,
            "title": "Process Engineering Units",
            "remarks": "Process EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEUFACTOR",
            "required": false,
            "persistent": false,
            "title": "Process Engineering Unitsfactor",
            "remarks": "Process EU Scaling Factor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOMINALIN",
            "required": false,
            "persistent": false,
            "title": "Input Value",
            "remarks": "Input Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESIREDOUT",
            "required": false,
            "persistent": false,
            "title": "Output Value",
            "remarks": "Output Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDIN",
            "required": false,
            "persistent": false,
            "title": "As Found Input",
            "remarks": "As Found Input Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDOUT",
            "required": false,
            "persistent": false,
            "title": "As Found Output",
            "remarks": "As Found Output Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTIN",
            "required": false,
            "persistent": false,
            "title": "As Left Input",
            "remarks": "As Left Input Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTOUT",
            "required": false,
            "persistent": false,
            "title": "As Left Output",
            "remarks": "As Left Output Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRASSETEU",
            "required": false,
            "persistent": false,
            "title": "Asset Function Output Range  Engineering Units",
            "remarks": "Instrument Output Range EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTOUTERROR",
            "required": false,
            "persistent": true,
            "title": "As Left Output Error",
            "remarks": "The As Left output error for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Nominal Input",
            "remarks": "The user-specified input value for each analog calibration point. The nominal input value is based on the asset function Input Range From and To fields and the amount of calibration points. For example, a 3 calibration  point check is defined at 20%, 50%, and 75%. The input range of 100 psi to 300 psi results in the calibration of the instrument at 60 psi, 150 psi, and 225 psi.",
            "sameAsAttribute": "INPUTVALUE",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "OUTPUTVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Desired Output",
            "remarks": "Desired output is the result that you want to occur for an input value. For example, for an input of 0 psi, the output result you want is 4 mA. This value is a calculation based on the nominal input value. ",
            "sameAsAttribute": "OUTPUTVALUE",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDINPUT_NP",
            "required": false,
            "persistent": false,
            "title": "As Found Input",
            "remarks": "The input value before the asset is adjusted. All As Found data must be entered before a work order can be closed.",
            "sameAsAttribute": "ASFOUNDINPUT",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDOUTPUT_NP",
            "required": false,
            "persistent": false,
            "title": "As Found Output",
            "remarks": "The output value before the asset is adjusted. All As Found data must be entered before a work order can be closed.",
            "sameAsAttribute": "ASFOUNDOUTPUT",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTINPUT_NP",
            "required": false,
            "persistent": false,
            "title": "As Left Input",
            "remarks": "The input value after the asset is adjusted. All As Left data must be entered before a work order can be closed.",
            "sameAsAttribute": "ASLEFTINPUT",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTOUTPUT_NP",
            "required": false,
            "persistent": false,
            "title": "As Left Output",
            "remarks": "The output value after the asset is adjusted. All As Left data must be entered before a work order can be closed.",
            "sameAsAttribute": "ASLEFTOUTPUT",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "RON1LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Range Limit from",
            "remarks": "ron1lower",
            "sameAsAttribute": "RON1LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "RON1UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "ron1upper",
            "sameAsAttribute": "RON1UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "SETPOINTVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Set Point",
            "remarks": "The input value at which a discrete device activates.",
            "sameAsAttribute": "SETPOINTVALUE",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDSETPOINT_NP",
            "required": false,
            "persistent": false,
            "title": "As Found Set Point",
            "remarks": "The set point value before the asset is adjusted.",
            "sameAsAttribute": "ASFOUNDSETPOINT",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTSETPOINT_NP",
            "required": false,
            "persistent": false,
            "title": "As Left Set Point ",
            "remarks": "The set point value after the asset is adjusted.",
            "sameAsAttribute": "ASLEFTSETPOINT",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL1LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 1 From",
            "remarks": "The as found tolerance readings.",
            "sameAsAttribute": "ASFOUNDTOL1LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL1UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 1 To",
            "remarks": "asfoundtol1upper",
            "sameAsAttribute": "ASFOUNDTOL1UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL2LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 2 From",
            "remarks": "The as found tolerance readings.",
            "sameAsAttribute": "ASFOUNDTOL2LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL2UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 2 To",
            "remarks": "asfoundtol2upper",
            "sameAsAttribute": "ASFOUNDTOL2UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL3LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 3 From",
            "remarks": "The as found tolerance readings.",
            "sameAsAttribute": "ASFOUNDTOL3LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL3UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 3 To",
            "remarks": "asfoundtol3upper",
            "sameAsAttribute": "ASFOUNDTOL3UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL4LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 4 From",
            "remarks": "The as found tolerance readings.",
            "sameAsAttribute": "ASFOUNDTOL4LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASFOUNDTOL4UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 4 From",
            "remarks": "asfoundtol4upper",
            "sameAsAttribute": "ASFOUNDTOL4UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL1LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 1 From",
            "remarks": "aslefttol1lower",
            "sameAsAttribute": "ASLEFTTOL1LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL1UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The as left tolerance readings.",
            "sameAsAttribute": "ASLEFTTOL1UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL2LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 2 From",
            "remarks": "aslefttol2lower",
            "sameAsAttribute": "ASLEFTTOL2LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL3LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 3 From",
            "remarks": "aslefttol3lower",
            "sameAsAttribute": "ASLEFTTOL3LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL3UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 3 To",
            "remarks": "aslefttol3upper",
            "sameAsAttribute": "ASLEFTTOL3UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL4LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 4 From",
            "remarks": "aslefttol4lower",
            "sameAsAttribute": "ASLEFTTOL4LOWER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL4UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 4 To",
            "remarks": "aslefttol4upper",
            "sameAsAttribute": "ASLEFTTOL4UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "ASLEFTTOL2UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The as left tolerance readings.",
            "sameAsAttribute": "ASLEFTTOL2UPPER",
            "sameAsObject": "PLUSCWODSPOINT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revisionnum",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "RON1TYPE",
            "required": false,
            "persistent": true,
            "title": "As",
            "remarks": "ron1type",
            "sameAsAttribute": "RON1TYPE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "ASFOUNDPTERROR",
            "required": true,
            "persistent": true,
            "title": "Has Error",
            "remarks": "Has Found Tolerance Error",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTPTERROR",
            "required": true,
            "persistent": true,
            "title": "Has Error",
            "remarks": "Has Found Tolerance Error",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL1UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 1 Upper",
            "remarks": "As FOUND Tolerance 1 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL2UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 2 Upper",
            "remarks": "As FOUND Tolerance 2 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL3UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 3 Upper",
            "remarks": "As FOUND Tolerance 3 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL4UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 4 Upper",
            "remarks": "As FOUND Tolerance 4 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL1LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 1 LOWER",
            "remarks": "As FOUND Tolerance 1 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL2LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 2 LOWER",
            "remarks": "As FOUND Tolerance 2 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL3LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 3 LOWER",
            "remarks": "As FOUND Tolerance 3 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDTOL4LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As FOUND Tolerance 4 LOWER",
            "remarks": "As FOUND Tolerance 4 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL1UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 1 Upper",
            "remarks": "As Left Tolerance 1 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL2UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 2 Upper",
            "remarks": "As Left Tolerance 2 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL3UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 3 Upper",
            "remarks": "As Left Tolerance 3 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL4UP_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 4 Upper",
            "remarks": "As Left Tolerance 4 Upper",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL1LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 1 LOWER",
            "remarks": "As Left Tolerance 1 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL2LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 2 LOWER",
            "remarks": "As Left Tolerance 2 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL3LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 3 LOWER",
            "remarks": "As Left Tolerance 3 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTTOL4LW_ORIG",
            "required": false,
            "persistent": true,
            "title": "As Left Tolerance 4 LOWER",
            "remarks": "As Left Tolerance 4 LOWER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDUNIT",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The engineering units the As Found Dynamic Value is measured in. This field is mandatory when an As Found Value is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTUNIT",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The engineering units the As Left Dynamic Value is measured in. This field is mandatory when an As Left Value is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comment",
            "remarks": "Function/Dynamic Check Comment Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFINPUTSTDDEV",
            "required": false,
            "persistent": true,
            "title": "Input Standard Deviation",
            "remarks": "This calculated value is determined after all Calibration Point As Found Input data is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUTPUTSTDDEV",
            "required": false,
            "persistent": true,
            "title": "Output Standard Deviation",
            "remarks": "This calculated value is determined after all Calibration Point As Found Output data is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFSETPTSTDDEV",
            "required": false,
            "persistent": true,
            "title": "Set Point Standard Deviation",
            "remarks": "This calculated value is determined after all  As Found Set Point data is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLINPUTSTDDEV",
            "required": false,
            "persistent": true,
            "title": "Input Standard Deviation",
            "remarks": "This calculated value is determined after all As Left Input data is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLOUTPUTSTDDEV",
            "required": false,
            "persistent": true,
            "title": "Output Standard Deviation",
            "remarks": "This calculated value is determined after all As Left Output data is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLSETPTSTDDEV",
            "required": false,
            "persistent": true,
            "title": "Set Point Standard Deviation",
            "remarks": "This calculated value is determined after all As Left Set Point data is entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PVASLTINPUT",
            "required": false,
            "persistent": true,
            "title": "Pv As Left Input",
            "remarks": "The As Left Input value from the last calibration reading taken for this asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PVASLTOUTPUT",
            "required": false,
            "persistent": true,
            "title": "Pv As Left Output",
            "remarks": "The As Left Output value from the last calibration reading taken for this asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PVASLTSETPNT",
            "required": false,
            "persistent": true,
            "title": "Pv As Left Set Point",
            "remarks": "The As Left Set Point value from the last calibration reading taken for this asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETPOINTADJ",
            "required": true,
            "persistent": true,
            "title": "Set Point Adjustment",
            "remarks": "When selected, the Set Point field on the work order data sheet can be edited. Select this to allow deadband adjustments.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDPASS",
            "required": true,
            "persistent": true,
            "title": "As Found Pass",
            "remarks": "When selected, indicates that the As Found Function Check passed. The As Found Pass and As Found Fail fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDFAIL",
            "required": true,
            "persistent": true,
            "title": "As Found Fail",
            "remarks": "When selected, indicates that the As Found Function Check failed. The As Found Pass and As Found Fail fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTPASS",
            "required": true,
            "persistent": true,
            "title": "As Left Pass",
            "remarks": "When selected, indicates that the As Left Function Check passed. The As Left Pass and As Left Fail fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTFAIL",
            "required": true,
            "persistent": true,
            "title": "As Left Fail",
            "remarks": "When selected, indicates that the As Left Function Check failed. The As Left Pass and As Left Fail fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDERROR",
            "required": true,
            "persistent": true,
            "title": "As Found Error",
            "remarks": "When selected, indicates that As Found Calibration Point has exceeded its status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTERROR",
            "required": true,
            "persistent": true,
            "title": "As Left Error",
            "remarks": "When this check box is selected, the As Left Calibration Point has exceeded its status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISAVERAGE",
            "required": true,
            "persistent": true,
            "title": "Is Average",
            "remarks": "Is Average",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WODSNUM",
            "required": false,
            "persistent": true,
            "title": "Workorder data sheet number",
            "remarks": "Sequencial number that identifies a data sheet in a workorder, along with the WONUM, DSPLANNUM and REVISION.",
            "sameAsAttribute": "WODSNUM",
            "sameAsObject": "PLUSCWODS"
        },
        {
            "attributeName": "PLUSCWODSPOINTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDRESPONSE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "As Found Response Long description",
            "remarks": "Long Description for As Found Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTRESPONSE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "As Left Response Long description",
            "remarks": "Long Description for As Left Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Comment Long description",
            "remarks": "Long Description for Comment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "EXPECTDRIFT",
            "required": false,
            "persistent": true,
            "title": "Expected Drift",
            "remarks": "The expected calibration variation of the asset over a period of time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPECTDRIFTEU",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of measure of the expected drift.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTUNCERT",
            "required": false,
            "persistent": true,
            "title": "Input Uncertainty",
            "remarks": "The uncertainty measurement input value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTUNCERTEU",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of measure of the uncertainty input.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCERTVALUE",
            "required": false,
            "persistent": true,
            "title": "Uncertainty Value",
            "remarks": "A value that is determined by statistical methods.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCERTVALUEEU",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of measure of the uncertainty value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TUR",
            "required": false,
            "persistent": true,
            "title": "TUR",
            "remarks": "Test Uncertainty Ratio is the comparison between the accuracy of the Unit Under Test (UUT) and the estimated calibration uncertainty. For example 1:1, 4:1, 10:1",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCWODSPOINTSINSTR",
            "target": "PLUSCWODSINSTR",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq  and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINTAVERAGE",
            "target": "PLUSCWODSPOINT",
            "remarks": "Relationship between a point and its corresponding average/std dev row, if it has one. Returns zero or one row.",
            "whereClause": "wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum=:revisionnum and wodsnum=:wodsnum and instrseq=:instrseq and point=:point and isaverage=:yes",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCWODSLOOPDYNAMIC",
            "source": "PLUSCWODS",
            "remarks": "Loop relationship for the presentation of dynamic checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and instrseq in (select instrseq from pluscwodsinstr where wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and caldynamic=:yes)",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPFUNCTION",
            "source": "PLUSCWODS",
            "remarks": "Loop relationship for the presentation of function checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and instrseq in (select instrseq from pluscwodsinstr where wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and calfunction=:yes)",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPPOINTS",
            "source": "PLUSCWODS",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and instrseq in (select instrseq from pluscwodsinstr where wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and calpoint=:yes)",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINT",
            "source": "PLUSCWODS",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRALLPOINT",
            "source": "PLUSCWODSINSTR",
            "remarks": "All points (either cal points, function checks or dynamic checks) related to an asset function. Used by the Mobile app for downloading.",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRDYNAMIC",
            "source": "PLUSCWODSINSTR",
            "remarks": "Relationship for the presentation of dynamic checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum and :yes=:caldynamic",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRFUNCTION",
            "source": "PLUSCWODSINSTR",
            "remarks": "Relationship for the presentation of function checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum and :yes=:calfunction",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRPOINTS",
            "source": "PLUSCWODSINSTR",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum and :yes=:calpoint",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINTAVERAGE",
            "source": "PLUSCWODSPOINT",
            "remarks": "Relationship between a point and its corresponding average/std dev row, if it has one. Returns zero or one row.",
            "whereClause": "wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum=:revisionnum and wodsnum=:wodsnum and instrseq=:instrseq and point=:point and isaverage=:yes",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPPOINTS",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINT",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ]
}