mos = {
    "objectName": "MAXIFACECONTROL",
    "className": "psdi.iface.app.control.MaxIfaceControlSet",
    "description": "iface control",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACECONTROLID",
    "primaryKeyColumns": [
        "IFACECONTROL"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTLISTVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTSYSCONTROL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTXREFVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEINCNTL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXLISTOVERVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXPROCCOLS",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface controls",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXTRANSFORMPROC",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface controls",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXIFACECONTROL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXIFACECONTROL",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACECONTROL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "IFACECONTROL",
            "required": true,
            "persistent": true,
            "title": "Integration Control",
            "remarks": "Identifies an interface control, which is a setting that lets you change or control the behavior of an interface.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the interface control. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of the corresponding interface control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Value of the corresponding interface control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the corresponding interface control was predefined (MEA-supplied) or added by a user. If the check box is selected, a user added the control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTRUE",
            "required": true,
            "persistent": true,
            "title": "Default True",
            "remarks": "Specifies whether the default value of a Boolean type interface control is True or False. If the check box is selected, the default value is True.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": true,
            "title": "Domain",
            "remarks": "Identifies an existing Maximo domain that will validate the value(s) entered for the interface control. For more information about domains, refer to the Configuration module.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "MAXIFACECONTROLID",
            "required": true,
            "persistent": true,
            "title": "MAXIFACECONTROLID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAXIFACECNTLLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxifacecontrol",
            "whereClause": "ldkey=:maxifacecontrolid and ldownertable = 'MAXIFACECONTROL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXCONTROLVALUE",
            "target": "MAXCONTROLVALUE",
            "remarks": "Relationship to the MaxControlValue table, used to find all details records for a given ifacetype and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCONTROL",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtSysControl table, used to find all details records for a given ifacecontrol. (maxextsyscontrol.ifacecontrol = maxifacecontrol.ifacecontrol) The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACECNTLOOKUP",
            "source": "MAXIFACEINCNTL",
            "remarks": "Relationship from maxifaceincntl to maxifacecontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECNTOUTLOOKUP",
            "source": "MAXIFACEOUTCNTL",
            "remarks": "Relationship from maxifaceoutcntl to maxifacecontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        }
    ]
}