mos = {
    "objectName": "IMGLIB",
    "className": "psdi.app.system.ImgLibSet",
    "description": "Image library",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "IMGLIBID",
    "primaryKeyColumns": [
        "IMGLIBID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "IMGLIB",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Referenced Object",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "IMGLIBID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REFOBJECT",
            "required": true,
            "persistent": true,
            "title": "Referenced Object",
            "remarks": "Referenced Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REFOBJECTID",
            "required": true,
            "persistent": true,
            "title": "Referenced Object Unique Id",
            "remarks": "Referenced Object Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMAGENAME",
            "required": true,
            "persistent": true,
            "title": "File name or description of the image file",
            "remarks": "File name or description of the image file",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMAGE",
            "required": true,
            "persistent": true,
            "title": "Image file CLOB field",
            "remarks": "Image file CLOB field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MIMETYPE",
            "required": true,
            "persistent": true,
            "title": "Content/MIME type of the image",
            "remarks": "Content/MIME type of the image",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "IMGLIB",
            "source": "ASSET",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given asset. (imglib.refobject='ASSET' and imglib.refobjectid=:ASSET.ASSETUID). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ASSET' and refobjectid=:assetuid",
            "cardinality": null
        },
        {
            "name": "IMGLIB",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given class structure. (imglib.refobject='CLASSSTRUCTURE'; and imglib.refobjectid=:classstructure$CLASSSTRUCTURE.CLASSSTRUCTUREUID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'CLASSSTRUCTURE' and refobjectid = :classstructureuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item in matusetrans. (refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        },
        {
            "name": "IMGLIB",
            "source": "ITEM",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item. (imglib.refobject='ITEM' and imglib.refobjectid=:item$ITEM.ITEMID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'ITEM' and refobjectid = :itemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "source": "LEASEVIEWLINE",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item in matusetrans. (refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        },
        {
            "name": "IMGLIB",
            "source": "LOCATIONS",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given location. (imglib.refobject='LOCATIONS' and imglib.refobjectid=:LOCATIONS.LOCATIONSID). The resulting set will contain zero or one object.",
            "whereClause": "refobject='LOCATIONS' and refobjectid=:locationsid",
            "cardinality": null
        },
        {
            "name": "IMGLIB",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item in matusetrans. (refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        },
        {
            "name": "IMGLIB",
            "source": "SERVICEITEMS",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item. (imglib.refobject='ITEM' and imglib.refobjectid=:item$SERVICEITEMS.ITEMID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'ITEM' and refobjectid = :itemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "source": "TOOLITEM",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item. (imglib.refobject='ITEM' and imglib.refobjectid=:item$TOOLITEM.ITEMID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'ITEM' and refobjectid = :itemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "source": "WARRANTYVIEWLINE",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item in matusetrans. (refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ITEM' and refobjectid =(select itemid from item where itemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        }
    ]
}