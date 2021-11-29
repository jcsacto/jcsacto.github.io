mos = {
    "objectName": "PDSPEC",
    "className": "psdi.app.po.PDSpecSet",
    "description": "Purchasing Documents Specifications",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PDSPECID",
    "primaryKeyColumns": [
        "REFOBJECTID",
        "ASSETATTRID",
        "SECTION",
        "REFOBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "PDSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "PDSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, LINKEDTOSECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSPEC",
            "targetObject": "PDSPEC",
            "parentKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "targetKeys": "CLASSSTRUCTUREID, ASSETATTRID, SECTION, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PDSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PDSPEC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PDSPEC",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 184",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "PDSPEC",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PDSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PDSPEC",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "POLINE",
            "targetObject": "PDSPEC",
            "parentKeys": "POLINEID",
            "targetKeys": "REFOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PO Line",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PDSPEC",
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
            "attributeName": "PDSPECID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Alphanumeric Value",
            "remarks": "Alphanumeric(text) value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset attribute identifier",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date record modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "DISPLAYSEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Display Sequence",
            "remarks": "Display sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKEDTOATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Linked to Attribute",
            "remarks": "This attribute is linked to another attribute in this specification.",
            "sameAsAttribute": "ASSETATTRIBUTEID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LINKEDTOSECTION",
            "required": false,
            "persistent": true,
            "title": "Linked To Section",
            "remarks": "This section is linked to another section in this specification.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Entered units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Numeric Value",
            "remarks": "Numeric value in entered units",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section for a group of attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "REFOBJECTID",
            "required": false,
            "persistent": true,
            "title": "Reference Object ID",
            "remarks": "Reference Object ID",
            "sameAsAttribute": "POLINEID",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "REFOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Reference Object Name",
            "remarks": "Reference Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSSPECID",
            "required": false,
            "persistent": true,
            "title": "ClassSpec ID",
            "remarks": "ClassSpec Unique ID",
            "sameAsAttribute": "CLASSSPECID",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Mandatory",
            "remarks": "Is value mandatory?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PDOWNERID",
            "required": false,
            "persistent": true,
            "title": "Reference Object Owner ID",
            "remarks": "Reference Object Owner ID",
            "sameAsAttribute": "POID",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Table Value",
            "remarks": "The value from the table specified in the DOMAIN where the domaintype and datatype is TABLE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item record",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "REFOBJECTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Line",
            "remarks": "Line Number copied over from the refobject",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attribute for a given class specification record. (assetattribute.assetattrid = classspec.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the classspec table, used to find the classspec record for a given pdspec. (pdspec.classspecid=classspec.classspecid) The resulting set will contain one object.",
            "whereClause": "classspecid=:classspecid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given item specification. (itemspec.classstructureid = classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINE",
            "target": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find a rfq line in the pdspec table. (invoicelineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "invoicelineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINE",
            "target": "MRLINE",
            "remarks": "Relationship to the MRLine table, used to find a mrline in the pdspec table. (mrlineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "mrlineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find a purchase order line in the pdspec table. (pdpsec.refobjectid = poline.polineid).  The resulting set will contain zero or more objects.",
            "whereClause": "polineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find a purchase req line in the pdspec table. (prlineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "prlineid=:refobjectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINE",
            "target": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find a rfq line in the pdspec table. (rfqlineid=:refobjectid).  The resulting set will contain zero or more objects.",
            "whereClause": "rfqlineid=:refobjectid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVOICELINESPECCLASS",
            "source": "INVOICE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given invoice (pdownerid=:invoiceid and refobjectname='INVOICELINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:invoiceid and refobjectname='INVOICELINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "source": "INVOICE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given invoice (pdownerid=:invoiceid and refobjectname='INVOICELINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:invoiceid and refobjectname='INVOICELINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINESPEC",
            "source": "INVOICELINE",
            "remarks": "Relationship to the InvoiceLine table, used to find a invoice line in the pdspec table. (refobjectid=:invoicelineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:invoicelineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICELINESPECCLASS",
            "source": "INVOICELINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given invoice (refobjectid=:invoicelineid and refobjectname='INVOICELINE' and classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:invoicelineid and refobjectname='INVOICELINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINESPECCLASS",
            "source": "MR",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given mr (pdownerid=:mrid and refobjectname=''MRLINE''). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:mrid and refobjectname='MRLINE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINESPEC",
            "source": "MRLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given mr (pdownerid=:mrid and refobjectname=''MRLINE''). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:mrlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MRLINESPECCLASS",
            "source": "MRLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given MRLINE (classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:mrlineid and refobjectname='MRLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINESPECCLASS",
            "source": "PO",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:poid and refobjectname='POLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:poid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "source": "PO",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:poid and refobjectname='POLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:poid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "source": "POLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:poid and refobjectname='POLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:poid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECITEMNUM",
            "source": "POLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po. The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:polineid and refobjectname='POLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINESPEC",
            "source": "POLINE",
            "remarks": "Relationship to the POLine table, used to find a purchase order line in the pdspec table. (pdpsec.refobjectid = poline.polineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:polineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINESPECCLASS",
            "source": "POLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:polineid and refobjectname='POLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "source": "PR",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given pr (pdownerid=:prid and refobjectname='PRLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:prid and refobjectname='PRLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINESPECCLASS",
            "source": "PR",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given po (pdownerid=:prid and refobjectname='PRLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:prid and refobjectname='PRLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECITEMNUM",
            "source": "PRLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given pr. The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:prlineid and refobjectname='PRLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINESPEC",
            "source": "PRLINE",
            "remarks": "Relationship to the PRLine table, used to find a purchase req line in the pdspec table. (refobjectid=:prlineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:prlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRLINESPECCLASS",
            "source": "PRLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given pr (classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:prlineid and refobjectname='PRLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINESPECCLASS",
            "source": "RFQ",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given rfq (pdownerid=:rfqid and refobjectname='RFQLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:rfqid and refobjectname='RFQLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PDSPECCLASS",
            "source": "RFQ",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given rfq (pdownerid=:rfqid and refobjectname='RFQLINE'). The resulting set will contain zero or more objects.",
            "whereClause": "pdownerid=:rfqid and refobjectname='RFQLINE' ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINESPEC",
            "source": "RFQLINE",
            "remarks": "Relationship to the RFQLine table, used to find a rfq line in the pdspec table. (refobjectid=:rfqlineid).  The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:rfqlineid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RFQLINESPECCLASS",
            "source": "RFQLINE",
            "remarks": "Relationship to the pdspec table, used to find the pdspec records for a given rfq (refobjectid=:rfqlineid and refobjectname='RFQLINE' and classstructureid=:classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:rfqlineid and refobjectname='RFQLINE' and classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        }
    ]
}