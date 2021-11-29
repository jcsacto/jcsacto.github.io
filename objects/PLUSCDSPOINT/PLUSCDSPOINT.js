mos = {
    "objectName": "PLUSCDSPOINT",
    "className": "psdi.plusc.app.pluscds.PlusCDSPointSet",
    "description": "Data Sheet - Calibration Points Rows",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCDSPOINTID",
    "primaryKeyColumns": [
        "PLUSCDSPOINTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCDSPOINT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCDSPOINT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSPOINT",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSPOINT",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INPUTPERCENT",
            "required": false,
            "persistent": true,
            "title": "Percent Input",
            "remarks": "Input Percent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUTVALUE",
            "required": false,
            "persistent": true,
            "title": "Output Value",
            "remarks": "The value of the desired output for given input (for example, 0 psi input = 4 mA output).",
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
            "attributeName": "POINT",
            "required": true,
            "persistent": true,
            "title": "Calibration Point",
            "remarks": "A defined test point that accurately calibrates an instrument. Calibration points are numeric and unique. The amount of calibration points specified are based on what is required to calibrate the instrument.  Enter the value that is defined by business rules.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1UPPER",
            "required": false,
            "persistent": true,
            "title": "Lower Input Range",
            "remarks": "The maximum specified nominal value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1LOWER",
            "required": false,
            "persistent": true,
            "title": "Upper Input Range",
            "remarks": "The minimum specified nominal value for the calibration point of the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1LOWER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Lower",
            "remarks": "The minimum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance lower limit in this field. This value must be less than the value in the Tolerance To field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance From field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1UPPER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Upper",
            "remarks": "The maximum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance upper limit in this field. This value must be greater than the value in the Tolerance From field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance To field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2LOWER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Lower",
            "remarks": "The minimum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance lower limit in this field. This value must be less than the value in the Tolerance To field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance From field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2UPPER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Upper",
            "remarks": "The maximum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance upper limit in this field. This value must be greater than the value in the Tolerance From field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance To field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3LOWER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Lower",
            "remarks": "The minimum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance lower limit in this field. This value must be less than the value in the Tolerance To field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance From field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3UPPER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Upper",
            "remarks": "The maximum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance upper limit in this field. This value must be greater than the value in the Tolerance From field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance To field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4LOWER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Lower",
            "remarks": "Tolerance 4 Range Lower Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4UPPER",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Upper",
            "remarks": "The maximum specified tolerance value for the calibration point of the asset being calibrated. If you did not specify a tolerance for this asset in the Asset Functions table window, you can enter a tolerance upper limit in this field. This value must be greater than the value in the Tolerance From field. If you specify a tolerance for this asset in the future in the Asset Functions table window, the value you manually entered in the Tolerance To field is overwritten by Maximo with the calculated value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETPOINTACTION",
            "required": false,
            "persistent": true,
            "title": "Switch Action",
            "remarks": "Defines the desired behavior of discrete device (for example, a switch) at the specified set point. Click Select Value   to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETPOINTVALUE",
            "required": false,
            "persistent": true,
            "title": "Set Point Value",
            "remarks": "Defines the value at which a discrete device should actuate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLANTYPE",
            "required": false,
            "persistent": true,
            "title": "Plan Type",
            "remarks": "Indicates if the asset is analog or discrete. MAXIMO uses the value in this field to enable either the Analog Point Information fields or Discrete Point Information fields in the Calibration Points or Calibration Points For All table window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the calibration point for each asset function. Click Long Description if you need to enter more details.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRSEQ",
            "required": true,
            "persistent": true,
            "title": "Asset Function Seq",
            "remarks": "The user entered asset function reference number. You assign a unique reference number for each asset function in the data sheet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTION",
            "required": false,
            "persistent": true,
            "title": "Direction",
            "remarks": "Indicates the referential direction (that is, increasing or decreasing) of this calibration point in the calibration process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRUMENTFUNCTION",
            "required": false,
            "persistent": false,
            "title": "Asset Function",
            "remarks": "Asset Function Number",
            "sameAsAttribute": "ASSETFUNCTION",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTRUMENTDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Asset Function Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTRCALRANGEEUA",
            "required": false,
            "persistent": false,
            "title": "Asset Function Input Range Engineering Units",
            "remarks": "Instrument Calibration Range EU",
            "sameAsAttribute": "INSTRCALRANGEEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTRCALRANGEEUD",
            "required": false,
            "persistent": false,
            "title": "Asset Function Input Range Engineering Units",
            "remarks": "Instrument Calibration Range EU",
            "sameAsAttribute": "INSTRCALRANGEEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INSTROUTRANGEEU",
            "required": false,
            "persistent": false,
            "title": "Asset Function Output Range Engineering Units",
            "remarks": "Asset Function Calibration Range Engineering Units",
            "sameAsAttribute": "INSTROUTRANGEEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "INPUTVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Nominal input",
            "remarks": "The user-specified input value for each analog calibration point. The nominal input value is based on the asset function Input Range From and To fields and the amount of calibration points. For example, a 3 calibration  point check is defined at 20%, 50%, and 75%. The input range of 100 psi to 300 psi results in the calibration of the instrument at 60 psi, 150 psi, and 225 psi.",
            "sameAsAttribute": "INPUTVALUE",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "OUTPUTVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Desired output",
            "remarks": "Desired output is the result that you want to occur for an input value. For example, for an input of 0 psi, the output result you want is 4 mA. This value is a calculation based on the nominal input value.",
            "sameAsAttribute": "OUTPUTVALUE",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL1LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 1 from",
            "remarks": "tol1lower_np",
            "sameAsAttribute": "TOL1LOWER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL1UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol1upper_np",
            "sameAsAttribute": "TOL1UPPER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL2LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 2 from",
            "remarks": "tol2lower_np",
            "sameAsAttribute": "TOL2LOWER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL2UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol2upper_np",
            "sameAsAttribute": "TOL2UPPER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL3LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 3 from",
            "remarks": "tol3lower_np",
            "sameAsAttribute": "TOL3LOWER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL3UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol3upper",
            "sameAsAttribute": "TOL3UPPER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL4LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Tolerance 4 from",
            "remarks": "tol4lower",
            "sameAsAttribute": "TOL4LOWER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "TOL4UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol4upper_np",
            "sameAsAttribute": "TOL4UPPER",
            "sameAsObject": "PLUSCDSPOINT"
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
            "attributeName": "RON1LOWER_NP",
            "required": false,
            "persistent": false,
            "title": "Range Limit From",
            "remarks": "Ron1Lower_np",
            "sameAsAttribute": "RON1LOWER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "RON1UPPER_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "Ron1Upper_NP",
            "sameAsAttribute": "RON1UPPER",
            "sameAsObject": "PLUSCDSPOINT"
        },
        {
            "attributeName": "RON1TYPE",
            "required": false,
            "persistent": true,
            "title": "As",
            "remarks": "ron1type",
            "sameAsAttribute": "RON1TYPE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOLERANCEEU",
            "required": false,
            "persistent": true,
            "title": "toelranceeu",
            "remarks": "toleranceeu",
            "sameAsAttribute": "INSTROUTRANGEEU",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "OUTPUTVALUE_ROUNDING",
            "required": false,
            "persistent": false,
            "title": "Not rounded output value",
            "remarks": "Not rounded output value",
            "sameAsAttribute": "OUTPUTVALUE",
            "sameAsObject": "PLUSCDSPOINT"
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
            "attributeName": "CALPOINT",
            "required": true,
            "persistent": true,
            "title": "Calibration Point",
            "remarks": "Calibration Point",
            "sameAsAttribute": "CALPOINT",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "CALFUNCTION",
            "required": true,
            "persistent": true,
            "title": "Function Check Point",
            "remarks": "Function Check Point",
            "sameAsAttribute": "CALFUNCTION",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "CALDYNAMIC",
            "required": true,
            "persistent": true,
            "title": "Dynamic Check Point",
            "remarks": "Dynamic Check Point",
            "sameAsAttribute": "CALDYNAMIC",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "PLUSCDSPOINTID",
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
            "attributeName": "POINTDESCRIPTION_LONGDESCRIPTION",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCDSPOINTINSTRS",
            "target": "PLUSCDSINSTR",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSPOINTSINSTR",
            "target": "PLUSCDSINSTR",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum=:revisionnum",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCDSALLPOINTSINSTR",
            "source": "PLUSCDSINSTR",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRALLPOINT",
            "source": "PLUSCDSINSTR",
            "remarks": "All points (either cal points, function checks or dynamic checks) related to an asset function. Used by the Mobile app for downloading.",
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRDYNAMIC",
            "source": "PLUSCDSINSTR",
            "remarks": "Relationship for the presentation of dynamic checks",
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and caldynamic = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRFUNCTION",
            "source": "PLUSCDSINSTR",
            "remarks": "Relationship for the presentation of function checks",
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and calfunction = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRPOINTS",
            "source": "PLUSCDSINSTR",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and calpoint = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSLOOPDYNAMIC",
            "source": "PLUSDSPLAN",
            "remarks": "Loop relationship for the presentation of dynamic checks",
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum and caldynamic = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSLOOPFUNCTION",
            "source": "PLUSDSPLAN",
            "remarks": "Loop relationship for the presentation of function checks",
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum and calfunction = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSLOOPPOINTS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum and calpoint = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSPOINT",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum  and siteid= :siteid",
            "cardinality": null
        }
    ]
}