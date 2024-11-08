PGDMP  9    $            
    |            gestao_empresa    15.8    16.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16494    gestao_empresa    DATABASE     p   CREATE DATABASE gestao_empresa WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE gestao_empresa;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    5            �            1259    16496    tb_clientes    TABLE     z  CREATE TABLE public.tb_clientes (
    id_cliente integer NOT NULL,
    nome character varying(80) NOT NULL,
    email character varying(50),
    telefone character varying(11) NOT NULL,
    endereco character varying(44) NOT NULL,
    numero integer,
    complemento character varying(44),
    bairro character varying(50) NOT NULL,
    cidade character varying(35) NOT NULL
);
    DROP TABLE public.tb_clientes;
       public         heap    postgres    false    5            �            1259    16495    tb_clientes_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.tb_clientes_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.tb_clientes_id_cliente_seq;
       public          postgres    false    218    5                       0    0    tb_clientes_id_cliente_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.tb_clientes_id_cliente_seq OWNED BY public.tb_clientes.id_cliente;
          public          postgres    false    217            x           2604    16499    tb_clientes id_cliente    DEFAULT     �   ALTER TABLE ONLY public.tb_clientes ALTER COLUMN id_cliente SET DEFAULT nextval('public.tb_clientes_id_cliente_seq'::regclass);
 E   ALTER TABLE public.tb_clientes ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    218    217    218                      0    16496    tb_clientes 
   TABLE DATA           w   COPY public.tb_clientes (id_cliente, nome, email, telefone, endereco, numero, complemento, bairro, cidade) FROM stdin;
    public          postgres    false    218   .                  0    0    tb_clientes_id_cliente_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.tb_clientes_id_cliente_seq', 7, true);
          public          postgres    false    217            z           2606    16503 !   tb_clientes tb_clientes_email_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.tb_clientes
    ADD CONSTRAINT tb_clientes_email_key UNIQUE (email);
 K   ALTER TABLE ONLY public.tb_clientes DROP CONSTRAINT tb_clientes_email_key;
       public            postgres    false    218            |           2606    16501    tb_clientes tb_clientes_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.tb_clientes
    ADD CONSTRAINT tb_clientes_pkey PRIMARY KEY (id_cliente);
 F   ALTER TABLE ONLY public.tb_clientes DROP CONSTRAINT tb_clientes_pkey;
       public            postgres    false    218               �  x�mR[n�0�^���a=,�r����"_��Q��\���&����b�d�)����3�;L�%�؉wL�.��84���)�A%e]ϳ��$�{��OٷyZ����E�c��ң��}���&eĉ��m:
�I��y>�㭂bq"�C�p"�ae:K�Ņ� 4"[��Zŷ���0��n=ԩ��b.3Y��
;��@_-y��������gx!J��9]��y�X|f�c4"o��Te��w����,��̲j���@�h+�ez�XS0��2h�����;�v��%���1�u܊��מ�	I	�e��ފIg�Dd�#2�n[�f��q8X�l,��g.��HǸ߳c�ݰ́�eȧx���QG�}�XyR�f�T��=z��G'�L<'������F�	�~�#�kTY�s��E���n�%4��h�!�����KO�=�%�-=a�m�$�3�}�q     