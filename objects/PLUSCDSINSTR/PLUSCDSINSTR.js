mos = {
    "objectName": "PLUSCDSINSTR",
    "className": "psdi.plusc.app.pluscds.PlusCDSInstrSet",
    "description": "Data Sheet - Instruments",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCDSINSTRID",
    "primaryKeyColumns": [
        "DSPLANNUM",
        "ASSETFUNCTION",
        "REVISIONNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "PLUSCDSINSTR",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "DSPLANNUM, ASSETFUNCTION, REVISIONNUM",
            "targetKeys": "DSPLANNUM, ASSETFUNCTION, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet - Instruments",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCDSINSTR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCDSINSTR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSINSTR",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSINSTR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Data Sheet",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Data Sheet DescriptionThe description of the asset function for this data sheet. Click Long Description if you need to enter more details.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "PLANTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "User specified ANALOG or DISCRETE asset function. Click Select Value to select a value from the list. When you select either ANALOG or DISCRETE, the appropriate fields in the Asset Functions table window are either enabled or disabled for the type of asset specified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGEFROM",
            "required": false,
            "persistent": true,
            "title": "Asset Function Calibrate Range From",
            "remarks": "The minimum specified input value for the asset being calibrated. This value must be less than the value you enter in the Input Range To field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGETO",
            "required": false,
            "persistent": true,
            "title": "Asset Function Range To",
            "remarks": "The maximum specified input value for the asset being calibrated. This value must be greater than the value you enter in the Input Range From field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGEEU",
            "required": false,
            "persistent": true,
            "title": "Asset Function Input Range Engineering Units",
            "remarks": "The engineering units used to express the value of the input range. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGEFROM",
            "required": false,
            "persistent": true,
            "title": "Instrument Output Range From",
            "remarks": "The minimum specified output value for the asset being calibrated. This value must be less than the value you enter in the Output Range To field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGETO",
            "required": false,
            "persistent": true,
            "title": "Asset Function Output Range To",
            "remarks": "The maximum specified output value for the asset being calibrated. This value must be greater than the value you enter in the Output Range From field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGEEU",
            "required": false,
            "persistent": true,
            "title": "Asset Function Output Range Engineering Units",
            "remarks": "The engineering units used to express the value of the output range. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTPRECISION",
            "required": false,
            "persistent": true,
            "title": "Input Resolution",
            "remarks": "Indicates the minimum number of decimal places (greater than or equal to zero) required for a numeric field value. Calculations performed in MAXIMO for input and output functions will be performed to the specified resolution. For example, if you enter \"2\" in the Min Field Resolution field, MAXIMO validates that you enter a number in an input or output field that has at least two decimal places. Note: Minimum field resolution is not applied to all fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUTPRECISION",
            "required": false,
            "persistent": true,
            "title": "Output Precision",
            "remarks": "Indicates the minimum number of decimal places (greater than or equal to zero) required for a numeric field value. Calculations performed in MAXIMO for input and output functions will be performed to the specified resolution. For example, if you enter \"2\" in the Min Field Resolution field, MAXIMO validates that you enter a number in an input or output field that has at least two decimal places. Note: Minimum field resolution is not applied to all fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEU",
            "required": false,
            "persistent": true,
            "title": "Process Engineering Units",
            "remarks": "Defines the engineering units used for reporting calibration error. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEUFACTOR",
            "required": false,
            "persistent": true,
            "title": "Process Engineering Units Factor",
            "remarks": "Defines the conversion factor from output engineering units to user specified units. For example, an I/P convertor may represent a temperature signal (current and pneumatic pressure). The user may want to show error in temperature engineering units (C or F).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1",
            "remarks": "Indicates the tolerance's tolerance type. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2",
            "remarks": "Indicates the tolerance's tolerance type. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3",
            "remarks": "Indicates the tolerance's tolerance type. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4",
            "remarks": "Indicates the tolerance's tolerance type. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1TYPE",
            "required": false,
            "persistent": true,
            "title": "Input Limit type",
            "remarks": "Indicates the range on nominal's tolerance type. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal Lower Value",
            "remarks": "The minimum specified nominal value for the asset being calibrated. This value must be less than the value you enter in the Range Limit To field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal 1 Upper Value",
            "remarks": "The maximum specified nominal value for the asset being calibrated. This value must be greater than the value you enter in the Range Limit From field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOADJMADECHOICE",
            "required": true,
            "persistent": true,
            "title": "No Adjustment Made Choice",
            "remarks": "Choice of No Adj made Tolerance",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWPOINTINSERTS",
            "required": true,
            "persistent": true,
            "title": "Allow Point Inserts",
            "remarks": "This check box indicates if the field technician can insert calibration point row(s) to an asset function while performing a calibration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRSEQ",
            "required": true,
            "persistent": true,
            "title": "Asset Function Seq",
            "remarks": "Instrument Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SQUAREROOT",
            "required": true,
            "persistent": true,
            "title": "Square Root",
            "remarks": "Select the check box to calibrate analog asset functions that measure differential pressure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLIPLIMITS",
            "required": true,
            "persistent": true,
            "title": "Clip Limits",
            "remarks": "Clip Limits",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Engineering Units",
            "remarks": "Tolerance 1 Sum EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Engineering Units",
            "remarks": "Tolerance 2 Sum EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Engineering Units",
            "remarks": "Tolerance 3 Sum EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Engineering Units",
            "remarks": "Tolerance 4 Summed EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Span",
            "remarks": "Tolerance 1 Sum Span",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Span",
            "remarks": "Tolerance 2 Sum Span",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Span",
            "remarks": "Tolerance 3 Summed Span",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Span",
            "remarks": "Tolerance 4 Summed Span",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Upper Range Value",
            "remarks": "Tolerance 1 Summed Upper Range Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Upper Value",
            "remarks": "Tolerance 2 Summed Upper Range Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Upper Range Value",
            "remarks": "Tolerance 3 Summed Upper Range Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Upper Range Value",
            "remarks": "Tolerance 4 Summed Upper Range Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Reading",
            "remarks": "Tolerance 1 Summed Reading",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Reading",
            "remarks": "Tolerance 2 Summed Reading",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Reading",
            "remarks": "Tolerance 3 Summed Reading",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Read",
            "remarks": "Tolerance 4 Summed Read",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Direction",
            "remarks": "The polarity of the summed tolerances. The possible values are +, -, and +/-.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Reading",
            "remarks": "Tolerance 2 Summed Reading",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Sum Direction",
            "remarks": "Tolerance 3 Sum Direction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Direction",
            "remarks": "Tolerance 4 Summed Direction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 1 No Adjust Limit",
            "remarks": "A check box that allows you to designate which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 2 No Adjustment Limit",
            "remarks": "A check box that allows you to designate which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 3 No Adjustment Limit",
            "remarks": "A check box that allows you to designate which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 4 No Adjustment Limit",
            "remarks": "A check box that allows you to designate which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETFUNCTION",
            "required": true,
            "persistent": true,
            "title": "Asset Function",
            "remarks": "Asset Function Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 1 Description",
            "remarks": "Enter a description or comment about the Tolerance 1 range limit set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 2 Description",
            "remarks": "Enter a description or comment about the Tolerance 2 range limit set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 3 Description",
            "remarks": "Enter a description or comment about the Tolerance 3 range limit set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 4 Description",
            "remarks": "Enter a description or comment about the Tolerance 4 range limit set.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTRANGE",
            "required": true,
            "persistent": true,
            "title": "Tolerance on input",
            "remarks": "When selected (default setting), indicates that all tolerance calculations are based on the input information. When cleared, the tolerance calculations are based on the output range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUTRANGE",
            "required": true,
            "persistent": true,
            "title": "Tolerance on Output",
            "remarks": "When selected, indicates that the tolerance calculations are based on the output range. When cleared (default), the tolerance calculations are based on the input range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOADJMADECHOICE1",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No Adjst made to tolerance levels checkbox",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE2",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No adjst mande tolerance 2",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE3",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No adj made tolerance 3",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE4",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No adj made tolerance 4",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTRCALRANGEFROM_NP",
            "required": false,
            "persistent": false,
            "title": "Input Range From",
            "remarks": "Enter the lower range of the nominal input value of the asset. This value is required for analog asset functions. The value must be less than the value in the input range To field. For example, a pressure transmitter that is calibrated to measure 100 – 300 psi. The Input Range From is 100.",
            "sameAsAttribute": "INSTRCALRANGEFROM",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTRCALRANGETO_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "Enter the upper range of the nominal input value of the asset. This field is a required field for analog asset functions.  For example, a pressure transmitter that is calibrated to measure 100 – 300 psi. The input range To is 300.",
            "sameAsAttribute": "INSTRCALRANGETO",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTROUTRANGEFROM_NP",
            "required": false,
            "persistent": false,
            "title": "Output range from",
            "remarks": "Enter the lower range of the output value of the asset. This value is required for analog asset functions. The value must be less than the output upper range value in the To field.   For example, a pressure transmitter that is calibrated to generate an output of 4-20 milliamps (mA) for an input range of 100 – 300 psi. The Output Range From is 4. ",
            "sameAsAttribute": "INSTROUTRANGEFROM",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTROUTRANGETO_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "Enter the upper range of the output value of the asset. This value is required for analog asset functions.  For example, a pressure transmitter that is calibrated to generate an output of 4-20 milliamps (mA) for an input range of  100 – 300 psi. The output range To is 20.",
            "sameAsAttribute": "INSTROUTRANGETO",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "RON1LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Range Limit From",
            "remarks": "The input values of an asset added to a work order data sheet must be within a specified range. Enter a value less than or equal to 0 to specify the lower range limit.   For example, if a range limit is -3 to 3 EU, then the input of 100 psi from a pressure transmitter accepts values 97 – 103.",
            "sameAsAttribute": "RON1LOWERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "RON1UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The input values of an asset added to a work order data sheet must be within a specified range. Enter  a value greater than or equal to 0 to specify the upper range limit. For example, if a range limit is -3 to 3 EU, then the input of 100 psi from a pressure transmitter accepts values 97 – 103.",
            "sameAsAttribute": "RON1UPPERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL1LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single from",
            "remarks": "The lower range of the input value that determines the tolerance limit. Enter a value less than or equal to 0.  If you specify a single tolerance limit, the Summed EU, %Span, %URV, and %Reading fields become read-only.",
            "sameAsAttribute": "TOL1LOWERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL1UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the tolerance limit. Enter a value greater than or equal to 0. If you specify a single tolerance limit, the Summed EU, %Span, %URV, and %Reading fields become read-only.",
            "sameAsAttribute": "TOL1UPPERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL1SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "Engineering unit is a specific calibration formula that calculates tolerance limits. Specify a combination of  EU, %Span, %URV, and %Reading to determine the tolerance level. If you specify summed tolerance limits, the single tolerance fields become read-only.",
            "sameAsAttribute": "TOL1SUMEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL1SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "The %Span is a specific calibration formula that calculates tolerance limits. Specify a combination of  EU, %Span, %URV, and %Reading to determine the tolerance level. If you specify summed tolerance limits, the single tolerance fields become read-only.",
            "sameAsAttribute": "TOL1SUMSPAN",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL1SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "The %URV is a specific calibration formula that calculates tolerance limits. Specify a combination of  EU, %Span, %URV, and %Reading to determine the tolerance level. If you specify summed tolerance limits, the single tolerance fields become read-only.",
            "sameAsAttribute": "TOL1SUMURV",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL1SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "The %Reading is a specific calibration formula that calculates tolerance limits. Specify a combination of  EU, %Span, %URV, and %Reading to determine the tolerance level. If you specify summed tolerance limits, the single tolerance fields become read-only.",
            "sameAsAttribute": "TOL1SUMREAD",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL2LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single From",
            "remarks": "tol2lowervalue_np",
            "sameAsAttribute": "TOL2LOWERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL2UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "to",
            "remarks": "tol2uppervalue_np",
            "sameAsAttribute": "TOL2UPPERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL2SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "tol2SumEU_np",
            "sameAsAttribute": "TOL2SUMEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL2SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "tol2SumSpan_np",
            "sameAsAttribute": "TOL2SUMSPAN",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL2SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "tol2SumURV_np",
            "sameAsAttribute": "TOL2SUMURV",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL2SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "tol2SumRead_np",
            "sameAsAttribute": "TOL2SUMREAD",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL3LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single from",
            "remarks": "tol3lowervalue_np",
            "sameAsAttribute": "TOL3LOWERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL3UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol3uppervalue_np",
            "sameAsAttribute": "TOL3UPPERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL3SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "tol3SumEU_np",
            "sameAsAttribute": "TOL3SUMEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL3SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "tol3SumSpan_np",
            "sameAsAttribute": "TOL3SUMSPAN",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL3SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "tol3SumURV_np",
            "sameAsAttribute": "TOL3SUMURV",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL3SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "tol3SumRead_np",
            "sameAsAttribute": "TOL3SUMREAD",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single from",
            "remarks": "tol4lowervalue_np",
            "sameAsAttribute": "TOL4LOWERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol4uppervalue_np",
            "sameAsAttribute": "TOL4UPPERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "tol4SumEU_np",
            "sameAsAttribute": "TOL4SUMEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "tol4SumSpan_np",
            "sameAsAttribute": "TOL4SUMSPAN",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "_np",
            "sameAsAttribute": "TOL4SUMURV",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "tol4SumRead_np",
            "sameAsAttribute": "TOL4SUMREAD",
            "sameAsObject": "PLUSCDSINSTR"
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
            "attributeName": "PROCESSEUFACTOR_NP",
            "required": false,
            "persistent": false,
            "title": "Scaling Factor",
            "remarks": "The conversion factor from output engineering units to units you specify. For example, an I/P converter represents a temperature signal (current and pneumatic pressure). You want to show the error in temperature engineering units (Celsius or Fahrenheit).",
            "sameAsAttribute": "PROCESSEUFACTOR",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "CALPOINT",
            "required": true,
            "persistent": true,
            "title": "Calibration Point",
            "remarks": "A specific calibration test requirement for each asset function. Select this check box to indicate that the asset function has calibration points. If you select this check box, the Function Check Point check box and the Dynamic Check Point cannot be selected for the asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALFUNCTION",
            "required": true,
            "persistent": true,
            "title": "Function Check Point",
            "remarks": "An additional informational check point that is required to calibrate an instrument. The options are either pass or fail. Select the check box if the asset function is for a functional check. If you select this check box, the Calibration Points check box and the Dynamic Check Point cannot be selected for the asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALDYNAMIC",
            "required": true,
            "persistent": true,
            "title": "Dynamic Check Point",
            "remarks": "Additional informational data of the instrument being calibrated. A dynamic check point does not affect the calibration of an instrument. Select the check box if the asset function is for a dynamic check.  If you select this check box, the Calibration Points check box and the Function Check Point check box cannot be selected for the asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUAL",
            "required": true,
            "persistent": true,
            "title": "Manual Calibration Point",
            "remarks": "When selected, indicates that this asset function has manual calibration points. You can then enter values in the Input, Output, and Tolerance limit fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NONLINEAR",
            "required": true,
            "persistent": true,
            "title": "Non-Linear Instrument",
            "remarks": "Select this check box when the instrument is non-linear. When selected, you can enter a value in the Desired Output field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPEATABLE",
            "required": true,
            "persistent": true,
            "title": "Repeatable Calibration points",
            "remarks": "Indicates if the calibration point information is repeated on the work order data sheet. Select the check box to repeat the information. Enter the number of times the information is repeated in the Repeat Value field on the Configuration tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SQUARED",
            "required": true,
            "persistent": true,
            "title": "Reverse Flow",
            "remarks": "When selected, the formula calculation used to determine the tolerance limits is squared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLIPLIMITSIN",
            "required": true,
            "persistent": true,
            "title": "Limits Clipped on Input",
            "remarks": "When selected, the input values and the tolerance limits are clipped.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDSINSTRID",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
            "attributeName": "CONFIDLEVEL",
            "required": false,
            "persistent": true,
            "title": "Confidence Level",
            "remarks": "Populated with default levels by k-factor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM1",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM1_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM1",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBFROM2",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM2_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM2",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBFROM3",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM3_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM3",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBFROM4",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM4_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM4",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBMETHOD",
            "required": false,
            "persistent": true,
            "title": "Guardband Method",
            "remarks": "A method that calculates the reliability of the calibration. Enter a value or specify a value from the Select Value menu.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBSUMDIRECTION1",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBSUMDIRECTION2",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBSUMDIRECTION3",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBSUMDIRECTION4",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO1",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO1_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO1",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBTO2",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO2_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO2",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBTO3",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO3_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO3",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBTO4",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO4_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO4",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GUARDBAND",
            "required": false,
            "persistent": true,
            "title": "Guardband Factor",
            "remarks": "Safety factors subtracted from or added to the tolerance limits. The safety factor depends on the relative importance of the product failing and costing money to correct.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GUARDBAND_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Factor",
            "remarks": "Safety factors subtracted from or added to the tolerance limits. The safety factor depends on the relative importance of the product failing and costing money to correct.",
            "sameAsAttribute": "GUARDBAND",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "KFACTOR",
            "required": false,
            "persistent": true,
            "title": "k-Factor",
            "remarks": "The uncertainty coverage factor of the asset. The value k is based on the required level of confidence to be associated with the interval level that is defined. Typically, k is in the range 2 - 3.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCERTFREQ",
            "required": false,
            "persistent": true,
            "title": "Certification Interval",
            "remarks": "The frequency of the uncertainty interval. Enter a value and specify the unit. For example, the Certification Interval is 1 and Units is MONTHS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCERTUNITS",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of time of the uncertainty interval. Specify the value from the Select Value menu.  For example, the Certification Interval is 1 and Units is MONTHS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCDSALLPOINTSINSTR",
            "target": "PLUSCDSPOINT",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRALLPOINT",
            "target": "PLUSCDSPOINT",
            "remarks": "All points (either cal points, function checks or dynamic checks) related to an asset function. Used by the Mobile app for downloading.",
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRDYNAMIC",
            "target": "PLUSCDSPOINT",
            "remarks": "Relationship for the presentation of dynamic checks",
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and caldynamic = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRFUNCTION",
            "target": "PLUSCDSPOINT",
            "remarks": "Relationship for the presentation of function checks",
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and calfunction = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRPOINTS",
            "target": "PLUSCDSPOINT",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and calpoint = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "target": "PLUSDSPLAN",
            "remarks": "DS for each DSINSTR",
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCDSPOINTINSTRS",
            "source": "PLUSCDSPOINT",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSPOINTSINSTR",
            "source": "PLUSCDSPOINT",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTR",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        }
    ]
}