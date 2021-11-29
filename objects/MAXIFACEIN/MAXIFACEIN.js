mos = {
    "objectName": "MAXIFACEIN",
    "className": "psdi.iface.app.intsrv.MaxIfaceInSet",
    "description": "Enterprise Services",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEINID",
    "primaryKeyColumns": [
        "IFACENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXEXTIFACEIN",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Service Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXEXTIFACEOUT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEINCNTL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Service Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Service Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEOUT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACETYPEPROP",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIM",
            "parentKeys": "IFACENAME",
            "targetKeys": "MAXCHANNELNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "IFACENAME",
            "targetKeys": "CHANNELNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTERROR",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTERROREXTRACT",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTMSGTRK",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXWSREGISTRY",
            "parentKeys": "IFACENAME",
            "targetKeys": "SERVICENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXIFACEIN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "IFACETBNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Table",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEIN",
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
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Enterprise Service",
            "remarks": "IFACENAME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETYPE",
            "required": true,
            "persistent": true,
            "title": "Adapter",
            "remarks": "IFACETYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEEXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Processing Class",
            "remarks": "Path to a Java class file that contains inbound processing logic. If this field does not contain the name of a predefined (MEA-supplied) class file, users can add the name of a custom class file here. However, for the sake of consistency, reserve interface processing class fields for predefined class files and user exit class fields for custom Java class files.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEUSEREXITCLASS",
            "required": false,
            "persistent": true,
            "title": "User Exit Class",
            "remarks": "Path to a Java class file that contains custom processing logic.",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEMAPNAME",
            "required": false,
            "persistent": true,
            "title": "XSL Map",
            "remarks": "Path to a class file that contains XSL mapping to be applied to the interface.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "INTOBJECTNAME",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IFACECONTROL",
            "required": false,
            "persistent": true,
            "title": "Multiplication Control",
            "remarks": "Identifies a Cross Reference type control that translates a single external value to multiple Maximo organization or site values..",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "MAXIFACEINID",
            "required": true,
            "persistent": true,
            "title": "MAXIFACEINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETBNAME",
            "required": false,
            "persistent": true,
            "title": "Interface table",
            "remarks": "Interface table Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INTERPRETERCLASS",
            "required": false,
            "persistent": true,
            "title": "Interpreter Class",
            "remarks": "Interpreter clas name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REPLYEXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Processing Class",
            "remarks": "Reply exit class name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REPLYUSEREXITCLASS",
            "required": false,
            "persistent": true,
            "title": "User Exit Class",
            "remarks": "Reply User Exit class",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REPLYMAPNAME",
            "required": false,
            "persistent": true,
            "title": "XSL Map",
            "remarks": "Reply Map Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ELEMENTNAME",
            "required": false,
            "persistent": true,
            "title": "External Schema Element",
            "remarks": "Element Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYSCHEMALOC",
            "required": false,
            "persistent": true,
            "title": "External Schema File",
            "remarks": "Reply Schema Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYELEMENTNAME",
            "required": false,
            "persistent": true,
            "title": "External Schema Element",
            "remarks": "Response Schema Element",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Enable Service Response",
            "remarks": "Reply required",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Langcode",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": true,
            "title": "Operation",
            "remarks": "mesagetype",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEMALOCATION",
            "required": false,
            "persistent": true,
            "title": "External Schema File",
            "remarks": "Schema Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "XMLDATA",
            "required": false,
            "persistent": false,
            "title": "XML Data",
            "remarks": "Xml Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has LD",
            "remarks": "Has LD",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPLITTAG",
            "required": false,
            "persistent": true,
            "title": "Split Tag",
            "remarks": "Split Tag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USETXNTRACKING",
            "required": true,
            "persistent": true,
            "title": "Enable Message Tracking",
            "remarks": "Enable Transaction Tracking",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEEXTERNALSCHEMA",
            "required": true,
            "persistent": true,
            "title": "Use External Schema",
            "remarks": "Use External Schema",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEXML",
            "required": false,
            "persistent": false,
            "title": "Response XML",
            "remarks": "Response XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOREMSG",
            "required": true,
            "persistent": true,
            "title": "Store Message",
            "remarks": "Whether to store(save) the message or not. Option given due to performance implication",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTMSGIDFIELD",
            "required": false,
            "persistent": true,
            "title": "External Message ID",
            "remarks": "Transaction ID field name as supplied by External System",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEARCHFIELD",
            "required": false,
            "persistent": true,
            "title": "Search ID",
            "remarks": "Search Field name as set by Administrator for easy search",
            "sameAsAttribute": "SEARCHFIELD",
            "sameAsObject": "MAXIFACEOUT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAXIFACEINLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxifacein",
            "whereClause": "ldkey=:maxifaceinid and ldownertable = 'MAXIFACEIN'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTIFACEIN",
            "target": "MAXEXTIFACEIN",
            "remarks": "Relationship to the MAXIFACEIN table, used to find all in maps for a given ifacename . The resulting set will contain zero or more maps.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINCNTLDETAIL",
            "target": "MAXIFACEINCNTL",
            "remarks": "Relationship from maxifacein to maxifaceincntl table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINDETAIL",
            "target": "MAXIFACEINDETAIL",
            "remarks": "Relationship to the MAXIFACEINDETAIL table, used to find addition object structure . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEPROC",
            "target": "MAXIFACEPROC",
            "remarks": "Relationship to get all rules for a Enterprise Service.",
            "whereClause": "ifacename=:ifacename and (usewith = 'ESOBJECTSTRUCTURE' or usewith = 'ESOBJECT')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACETYPEPROP",
            "target": "MAXIFACETYPEPROP",
            "remarks": "Relationship MAXIFACETYPEPROP table, used to find gateway properties . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MaxIntObjDetail table, used to find all object details records for a given intobectname. (maxitbobjdetail.intobectname = maxifacein.intobectname) The resulting set will contain one or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to the MaxIntObject table, used to find object records for a given intobectname . The resulting set will contain one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACEIN",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the MaxIfaceIn table, enterprise service table, used to find enterprise service records for a given ifacename. The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacenamees",
            "cardinality": null
        },
        {
            "name": "MAXIFACEIN",
            "source": "MAXEXTIFACEIN",
            "remarks": "Relationship to the MAXIFACEOUT table to find more details of a given interface. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEIN",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXIFACEIN table, used to find all services for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXIFACEIN.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ]
}