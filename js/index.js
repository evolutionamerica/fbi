//Data e Hora
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var meses = new Array(
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
);
var ano = data.getFullYear();
var hora = data.getHours();
var minuto = data.getMinutes();

//Adicionar Autor
var autor = 0;
console.log(autor);
function addAutor(){
    var divPai = $('#hideOnPrint');
    var btnCriar = $('#adicionarAutor');
        autor = 1;
        $('#adicionarAutor').prop("disabled", true);
        divPai.append(
            '<div class="row mt-3">'+
            '<h5>Dados do Autor</h5>'+
            '<div class="col-md-2 col-sm-12">'+
                '<div>'+
                    '<label for="exampleFormControlInput1" class="form-label">RG:</label>'+
                    '<input type="email" class="form-control" id="rgAutor" placeholder="RG do autor.">'+
                '</div>'+
            '</div>'+
            '<div class="col-md-4">'+
                '<div>'+
                    '<label for="exampleFormControlInput1" class="form-label">Nome:</label>'+
                    '<input type="email" class="form-control" id="nomeAutor" placeholder="Insira o nome do autor:">'+
                '</div>'+
            '</div>'+
            '<div class="col-md-3">'+
                '<div>'+
                    '<label for="exampleFormControlInput1" class="form-label">Telefone:</label>'+
                    '<input type="email" class="form-control" id="telefoneAutor" placeholder="Insira o telefone do autor:">'+
                '</div>'+
            '</div>'+
            '<div class="col-md-3">'+
                '<div>'+
                    '<label for="exampleFormControlInput1" class="form-label">Trabalho:</label>'+
                    '<input type="email" class="form-control" id="trabalhoAutor" placeholder="Insira o trabalho do autor:">'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="row my-3">'+
            '<div class="col-md-6">'+
                '<label for="relatoPrisao" class="form-label">Em Defesa do Fato:</label>'+
                '<textarea class="form-control" id="defesaFato" rows="5" cols="33"></textarea>'+
            '</div>'+
        '</div>'
        );
     
}

// Fim Adicionar Autor

var codigosP = "";
var myModal = new bootstrap.Modal(document.getElementById('modalFoto'));


// Funções de evento

document.addEventListener("DOMContentLoaded", function(event) {
    $("#showOnPrint").hide()



});

document.getElementById("fecharModal").addEventListener("click", afterImageCopy);

document.getElementById("fecharModal1").addEventListener("click", afterImageCopy);


window.addEventListener('afterprint', (event) => {
    $("#showOnPrint").hide()
    $("#hideOnPrint").show()
    $("btnGerar").show()
    //-------------------
    $('#tipMandado').text('')
    $('#oficioN').text('')
    $('#nomeResp').text('')
    $('#ref').text('')
    $('#p1').text('')
    $('#p2').text('')
    $('#p4').text('')
    $('#nOficio').val('')
    $('#tipoMandado').val('')
    //-------------------
    $("#ddsNomeE").text("")
    $("#ddsAtvE").text("")
    $("#ddsEndereco").text("")
    $("#ddsDataV").text("")
    $("#ddsDataE").text("")
    $("#ddsInscE").text("")
    $("#inscMuni").val("")
    $("#nomeEst").val("")
    $("#atvEst").val("")
    $("endEst").val("")
    //-------------------
    // Da Natureza
    $("#ddsFatoNatureza").text("")
    $("#ddsFatoLocal").text("")
    $("#ddsFatoData").text("")
    $("#naturezaFato").val("")
    $("#localFato").val("")
    
    $('#cidadeAutor').val('')
    $('#cidadePessoa').val('')
    $('#nTco').val('')
    

    // Da Vitima
    $("#ddsNomeV").text("")
    $("#ddsRGV").text("")
    $("#ddsTelV").text("")
    $("#ddsTrabV").text("")
    $("#nomeVitima").val("")
    $("#rgVitima").val("")
    $("#telefoneVitima").val("")
    $("#trabalhoVitima").val("")

    // Do Autor
    $("#ddsNomeA").text("")
    $("ddsRGA").text("")
    $("ddsTelA").text("")
    $("ddsTrabA").text("")
    $("#nomeAutor").val("")
    $("#rgAutor").val("")
    $("#telefoneAutor").val("")
    $("#trabalhoAutor").val("")

    // Da Narrativa
    $("#relatoV").text("")
    $("#relatoA").text("")
    $("#provasF").text("")
    $("#relatoFatoV").val("")
    $("#defesaFato").val("")
    $("#provasFato").val("")
    // ----------------------------------------
    $("#codigoPenal input:checkbox:not(:checked)").show()
    $("#showOnPrint").hide()
    $("#hideOnPrint").show()
    codigosP = "";
    $("#codigoPenal").show()

    $("#ddsRG").text("")
    $("#ddsNome").text("")
    $("#ddsTel").text("")
    $("#infoAuto").find("p").remove()
    $("#ddsTrab").text("")
    $("#infoRelato").text("")
    $("#infoDefesa").text("")
    $("#tableArtigos").each(function(key, element) {
        $(element).find("tr").remove()
    })
    $("#codigoPenal input:checkbox:checked").each(function(key, element) {
        $(element).prop("checked", true);
    })
    $("#rgPessoa").val("")
    $("#nomePessoa").val("")
    $("#telefonePessoa").val("")
    $("#trabalhoPessoa").val("")
    $("#relatoPrisao").val("")
    $("#defesaReu").val("")
    $("#motivoConvoc").val("")
    $('#assinatura').text("")

});




function afterImageCopy() {

    $("#showOnPrint").hide()
    $("#hideOnPrint").show()
    $('#assinatura').text("")
    $("#btnGerar").show()
    //-------------------
    $('#tipMandado').text('')
    $('#oficioN').text('')
    $('#nomeResp').text('')
    $('#ref').text('')
    $('#p1').text('')
    $('#p2').text('')
    $('#p4').text('')
    $('#nOficio').val('')
    $('#tipoMandado').val('')
    // ------------------------------------------------------
    $("#ddsNomeE").text("")
    $("#ddsAtvE").text("")
    $("#ddsEndereco").text("")
    $("#ddsDataV").text("")
    $("#ddsDataE").text("")
    $("#ddsInscE").text("")
    $("#inscMuni").val("")
    $("#nomeEst").val("")
    $("#atvEst").val("")
    $("endEst").val("")
    // -------------------------------------------------------
    // Da Natureza
    $("#ddsFatoNatureza").text("")
    $("#ddsFatoLocal").text("")
    $("#ddsFatoData").text("")
    $("#naturezaFato").val("")
    $("#localFato").val("")

    $('#cidadeAutor').val('')
    $('#cidadePessoa').val('')
    $('#nTco').val('')
    
    // Da Vitima
    $("#ddsNomeV").text("")
    $("#ddsRGV").text("")
    $("#ddsTelV").text("")
    $("#ddsTrabV").text("")
    $("#nomeVitima").val("")
    $("#rgVitima").val("")
    $("#telefoneVitima").val("")
    $("trabalhoVitima").val("")

    // Do Autor
    $("#ddsNomeA").text("")
    $("ddsRGA").text("")
    $("ddsTelA").text("")
    $("ddsTrabA").text("")
    $("#nomeAutor").val("")
    $("#rgAutor").val("")
    $("#telefoneAutor").val("")
    $("trabalhoAutor").val("")

    // Da Narrativa
    $("#relatoV").text("")
    $("#relatoA").text("")
    $("#provasF").text("")
    $("#relatoFatoV").val("")
    $("#defesaFato").val("")
    $("#provasFato").val("")
    // -----------------------------------------------------
    $("#codigoPenal input:checkbox:not(:checked)").show()
    codigosP = "";
    $("#codigoPenal").show()

    $("#ddsRG").text("")
    $("#ddsNome").text("")
    $("#ddsTel").text("")
    $("#infoAuto").find("p").remove()
    $("#ddsTrab").text("")
    $("#infoRelato").text("")
    $("#infoDefesa").text("")
    $("#motivoConvoc").val("")
    $("#tableArtigos").each(function(key, element) {
        $(element).find("tr").remove()
    })
    $("#codigoPenal input:checkbox:checked").each(function(key, element) {
        $(element).prop("checked", false);
    })
    $("#rgPessoa").val("")
    $("#nomePessoa").val("")
    $("#telefonePessoa").val("")
    $("#trabalhoPessoa").val("")
    $("#relatoPrisao").val("")
    $("#defesaReu").val("")
    // ------------------------------------------------------
    $("#fotoPrisao").find("canvas").remove();
    $(".navbar").show();
}

function elaboraApf() {
    window.scrollTo(0, 0)
    if ($("#defesaReu").val().length != 0 && $("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#telefonePessoa").val().length != 0 && $("#trabalhoPessoa").val().length != 0 && $("#relatoPrisao").val().length != 0 && $("#respPrisao").val() != "") {
        if ($("#codigoPenal input:checkbox:checked").length != 0) {

            $("#ddsRG").text($("#rgPessoa").val().toUpperCase())
            $("#ddsNome").text($("#nomePessoa").val().toUpperCase())
            $("#ddsTel").text($("#telefonePessoa").val().toUpperCase())
            $("#ddsTrab").text($("#trabalhoPessoa").val().toUpperCase())
            $("#infoRelato").text($("#relatoPrisao").val().toUpperCase())
            $("#infoDefesa").text($("#defesaReu").val().toUpperCase())
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#codigoPenal").hide()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            var tempo = 0;
            var resto = 0;
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                codigosP += $(element).parent().find(".form-check-label").text().trim() + ", ";
                console.log(parseInt("" + element.value));
                tempo = tempo + parseInt("" + element.value);
                if(element.value <= 60){
                $("#tableArtigos").append(` <tr>
                    <th scope="row">${key + 1}</th>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>${element.value} meses.</td>
                </tr>`)
                }else if(element.value == 150){
                    $("#tableArtigos").append(` <tr>
                    <th scope="row">${key + 1}</th>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>2 anos e 30 meses.</td>
                </tr>`)
                }else if(element.value == 360){
                    $("#tableArtigos").append(` <tr>
                    <th scope="row">${key + 1}</th>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>6 anos.</td>
                </tr>`)
                }else if(element.value == 180){
                    $("#tableArtigos").append(` <tr>
                    <th scope="row">${key + 1}</th>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>3 anos.</td>
                </tr>`)
                }else if(element.value == 60){
                    $("#tableArtigos").append(` <tr>
                    <th scope="row">${key + 1}</th>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>1 ano.</td>
                </tr>`)
                }

            })
            /* Início Calculo do Tempo em Anos e Meses */
            if(tempo > 0 && tempo < 60){
                tempo = tempo+" meses";
            }
            else if(tempo>=60 && tempo < 120){resto = tempo - 60; if(resto>0){tempo = "1 ano e "+resto+" meses";}else if(resto<=0){tempo = "1 ano";}}
            else if(tempo>=120 && tempo < 180){resto = tempo - 120; if(resto>0){tempo = "2 anos e "+resto+" meses";}else if(resto<=0){tempo = "2 anos";}}
            else if(tempo>=180 && tempo < 240){resto = tempo - 180; if(resto>0){tempo = "3 anos e "+resto+" meses";}else if(resto<=0){tempo = "3 anos";}}
            else if(tempo>=240 && tempo < 300){resto = tempo - 240; if(resto>0){tempo = "4 anos e "+resto+" meses";}else if(resto<=0){tempo = "4 anos";}}
            else if(tempo>=300 && tempo < 360){resto = tempo - 300; if(resto>0){tempo = "5 anos e "+resto+" meses";}else if(resto<=0){tempo = "5 anos";}}
            else if(tempo>=360 && tempo < 420){resto = tempo - 360; if(resto>0){tempo = "6 anos e "+resto+" meses";}else if(resto<=0){tempo = "6 anos";}}
            else if(tempo>=420 && tempo < 480){resto = tempo - 420; if(resto>0){tempo = "7 anos e "+resto+" meses";}else if(resto<=0){tempo = "7 anos";}}
            else if(tempo>=480 && tempo < 540){resto = tempo - 480; if(resto>0){tempo = "8 anos e "+resto+" meses";}else if(resto<=0){tempo = "8 anos";}}
            else if(tempo>=540 && tempo < 600){resto = tempo - 540; if(resto>0){tempo = "9 anos e "+resto+" meses";}else if(resto<=0){tempo = "9 anos";}}
            else if(tempo>=600 && tempo < 660){resto = tempo - 600; if(resto>0){tempo = "10 anos e "+resto+" meses";}else if(resto<=0){tempo = "10 anos";}}
            else if(tempo>=660 && tempo < 720){resto = tempo - 660; if(resto>0){tempo = "11 anos e "+resto+" meses";}else if(resto<=0){tempo = "11 anos";}}
            else if(tempo>=720 && tempo < 780){resto = tempo - 720; if(resto>0){tempo = "12 anos e "+resto+" meses";}else if(resto<=0){tempo = "12 anos";}}
            else if(tempo>=780 && tempo < 840){resto = tempo - 780; if(resto>0){tempo = "13 anos e "+resto+" meses";}else if(resto<=0){tempo = "13 anos";}}
            else if(tempo>=840 && tempo < 900){resto = tempo - 840; if(resto>0){tempo = "14 anos e "+resto+" meses";}else if(resto<=0){tempo = "14 anos";}}
            else if(tempo>=900 && tempo < 960){resto = tempo - 900; if(resto>0){tempo = "15 anos e "+resto+" meses";}else if(resto<=0){tempo = "15 anos";}}
            else if(tempo>=960 && tempo < 1020){resto = tempo - 960; if(resto>0){tempo = "16 anos e "+resto+" meses";}else if(resto<=0){tempo = "16 anos";}}
            else if(tempo>=1020 && tempo < 1080){resto = tempo - 1020; if(resto>0){tempo = "17 anos e "+resto+" meses";}else if(resto<=0){tempo = "17 anos";}}
            /* Fim Calculo do Tempo em Anos e Meses */
            $("#infoAuto").append(`<p class="text-justify">Qual noticia o recolhimento de <b>${$("#nomePessoa").val().toUpperCase()}</b> de RG: <b>${$("#rgPessoa").val().toUpperCase()}</b>  caracterizando-se o estado de flagrância previsto nos artigos <b>${codigosP.toUpperCase()}</b>  do Código de Processo Penal, No mesmo auto representa a autoridade policial pela decretação da prisão preventiva do autuado, ou caso assim não se entenda pela decretação de sua prisão temporária.</p><p class="text-justify">Diante do exposto, HOMOLOGO o presente o auto de prisão em flagrante e <b>DECRETO A PRISÃO TEMPORÁRIA de ${$("#nomePessoa").val().toUpperCase()}</b> pelo prazo de <b>${tempo}</b>, findo o qual em não havendo prorrogação, deverá ser posto imediatamente em liberdade, independentemente de alvará, salvo se por outro motivo deva permanecer custodiado.</p>`)
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()
        } else {
            toastr["warning"]("Esqueceu de colocar os artigos", "Opa...")
        }

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }

}

function elaborarTco() {
    window.scrollTo(0, 0)
    if(autor==0){
        if ($("#nomeVitima").val().length != 0 && $("#rgVitima").val().length != 0 && $("#telefoneVitima").val().length != 0 && $("#trabalhoVitima").val().length != 0 && $("#respPrisao").val() != "") {
    
                // Da Natureza

                var str_data = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+1)).slice(-2) +'/'+ ano +' ás '+ ("0" + hora).slice(-2) +':'+ ("0" + minuto).slice(-2);
                $("#ddsFatoNatureza").text($("#naturezaFato").val().toUpperCase())
                $("#ddsFatoLocal").text($("#localFato").val().toUpperCase())
                $("#ddsFatoData").text(str_data)

                // Da Vitima
                $("#ddsNomeV").text($("#nomeVitima").val().toUpperCase())
                $("#ddsRGV").text($("#rgVitima").val().toUpperCase())
                $("#ddsTelV").text($("#telefoneVitima").val().toUpperCase())
                $("#ddsTrabV").text($("#trabalhoVitima").val().toUpperCase())

                // Do Autor
                $("#ddsNomeA").text("Desconhecido")
                $("#ddsRGA").text("Desconhecido")
                $("#ddsTelA").text("Desconhecido")
                $("#ddsTrabA").text("Desconhecido")

                // Da Narrativa
                $("#relatoV").text($("#relatoFatoV").val().toUpperCase())
                $("#relatoA").text("Desconhecido")
                $("#provasF").text($("#provasFato").val().toUpperCase())

                // Config
                $("#hideOnPrint").hide()
                $("#btnGerar").hide()
                $("#showOnPrint").show()
                $("#assinaturaResp").text($("#respPrisao").val())
                $(".navbar").hide();
                html2canvas(document.getElementById("container"), {
                    allowTaint: true,
                    scrollY: -window.scrollY
                }).then(canvas => {
                    document.getElementById("fotoPrisao").appendChild(canvas)
                });
                myModal.show()

        } else {
            toastr["warning"]("Algum campo está vazio", "Opa...")
        }
    }
    else if(autor==1){
        if ($("#nomeVitima").val().length != 0 && $("#rgVitima").val().length != 0 && $("#telefoneVitima").val().length != 0 && $("#trabalhoVitima").val().length != 0 && $("#nomeAutor").val().length != 0 && $("#rgAutor").val().length != 0 && $("#telefoneAutor").val().length != 0 && $("#trabalhoAutor").val().length != 0 && $("#relatoFatoV").val().length != 0 && $("#defesaFato").val().length != 0 && $("#provasFato").val().length != 0 && $("#respPrisao").val() != "") {

            // Da Natureza
            var str_data = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+1)).slice(-2) +'/'+ ano +' ás '+ ("0" + hora).slice(-2) +':'+ ("0" + minuto).slice(-2);
            $("#ddsFatoNatureza").text($("#naturezaFato").val().toUpperCase())
            $("#ddsFatoLocal").text($("#localFato").val().toUpperCase())
            $("#ddsFatoData").text(str_data)

            // Da Vitima
            $("#ddsNomeV").text($("#nomeVitima").val().toUpperCase())
            $("#ddsRGV").text($("#rgVitima").val().toUpperCase())
            $("#ddsTelV").text($("#telefoneVitima").val().toUpperCase())
            $("#ddsTrabV").text($("#trabalhoVitima").val().toUpperCase())

            // Do Autor
            $("#ddsNomeA").text($("#nomeAutor").val().toUpperCase())
            $("#ddsRGA").text($("#rgAutor").val().toUpperCase())
            $("#ddsTelA").text($("#telefoneAutor").val().toUpperCase())
            $("#ddsTrabA").text($("#trabalhoAutor").val().toUpperCase())

            // Da Narrativa
            $("#relatoV").text($("#relatoFatoV").val().toUpperCase())
            $("#relatoA").text($("#defesaFato").val().toUpperCase())
            $("#provasF").text($("#provasFato").val().toUpperCase())

            // Config
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
        }
    }
}


function elaborarOfc()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#motivoConvoc").val().length != 0 && $("#respPrisao").val() != "") 
    {
        var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        $("#p1").append(`Por meio desta carta, convoco o <b>${$("#nomePessoa").val().toUpperCase()}</b> portador do <b>RG</b> de Nº<b>${$("#rgPessoa").val().toUpperCase()}</b>, para comparacer de imediato a partir do recebimento deste ofício, à Delegacia de Investigações Federais de Las Venturas <b>para ${$("#motivoConvoc").val().toUpperCase()}</b>.`)
        $("#p2").append('O não comparecimento na delegacia no prazo de até <b>48 horas</b> após o recebimento do ofício, automaticamente constará a negligência por parte do mesmo, sendo emitido um mandado de <b>busca e apreensão.</b>')
        $("#dataAtual").append('Evolution America, '+str_data)
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarAlvara()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#telefonePessoa").val().length != 0 && $("#inscMuni").val().length != 0 && $("#nomeEst").val().length != 0 && $("#atvEst").val().length != 0 && $("#endEst").val().length != 0 && $("#respPrisao").val() != "") 
    {
        var datae = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+1)).slice(-2) +'/'+ ano;
        var datav = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+2)).slice(-2) +'/'+ ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#ddsNome").text($("#nomePessoa").val())
        $("#ddsRG").text($("#rgPessoa").val())
        $("#ddsTel").text($("#telefonePessoa").val())
        $("#ddsInscE").text('Nº '+$("#inscMuni").val()+'/2021')
        $("#ddsNomeE").text($("#nomeEst").val())
        $("#ddsAtvE").text($("#atvEst").val())
        $("#ddsEndereco").text($("#endEst").val())
        $("#ddsDataE").text(datae)
        $("#ddsDataV").text(datav)

        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarMandado()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#nOficio").val().length != 0 && $('#tipoMandado').val() != "" && $("#respPrisao").val() != "") 
    {
        if ($("#codigoPenal input:checkbox:checked").length != 0) {
            var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                codigosP += $(element).parent().find(".form-check-input").val().trim()+", ";
                console.log(codigosP);
            });
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            $("#dataAtual").append('Evolution America/EUA, '+str_data)
            $("#oficioN").append(`Ofício Nº <b>${$("#nOficio").val().toUpperCase()}</b>/2021 - DFBI/EUA.`)
            $('#nomeResp').append($('#respPrisao').val())
            if($('#tipoMandado').val() == 'Prisão'){
                $('#tipMandado').append('MANDADO DE PRISÃO')
                $('#ref').append(`Referência: <b>Pedido de Prisão Nº${$("#nOficio").val().toUpperCase()}/2021 - DFBI/EUA.</b>`)
                $("#p1").append(`Cumprimentando-o, encaminho a Vossa Senhoria esse documento de prisão, em razão do cumprimento de mandado judicial de prisão de <b>${$('#nomePessoa').val().toUpperCase()}</b>, RG: <b>${$('#rgPessoa').val().toUpperCase()}</b> atuado no(s) Artigo(s): <b>${codigosP}</b>e aos demais demasiados em flagrante.`)
                $("#p2").append(`MANDA a autoridade Policial, a quem esteja com autoridade para portar esse documento, indo por ele devidamente assinado que em cumprimento, dirija-se a DP da cidade, e aí sendo, <b>REALIZE A PRISÃO</b> do mesmo.`)
                $('p4').append('')
            }
            else if($('#tipoMandado').val() == 'Busca e Apreensão'){
                $('#tipMandado').append('MANDADO DE BUSCA E APREENSÃO')
                $('#ref').append(`Referência: <b>Pedido de Pedido de Busca e Apreensão de bens como motos, carros e casas, Pedido de Prisão Nº${$("#nOficio").val().toUpperCase()}/2021 - DFBI/EUA.</b>`)
                $("#p1").append(`Cumprimentando-o, encaminho a Vossa Senhoria esse documento de busca e apreensão, em razão do cumprimento de mandado judicial de busca e apreensão e prisão de <b>${$('#nomePessoa').val().toUpperCase()}</b>, RG: <b>${$('#rgPessoa').val().toUpperCase()}</b> atuado no(s) Artigo(s): <b>${codigosP}</b>os demais artigos serão ajustados no que for pego nos bens do mesmo..`)
                $("#p2").append(`MANDA a autoridade Policial, a quem esteja com autoridade para portar esse documento, indo por ele devidamente assinado que em cumprimento, dirija-se a DP da cidade, e aí sendo, <b>REALIZE BUSCA E APREENSÃO</b> nos Veículos e Propriedades do mesmo.`)
                $('p4').append('<b>DETERMINO</b> que após a apreensão, o veículo seja levado para a delegacia local com um delegado do FBI, lavrado o termo de apreensão, que a requerente seja notificado e que o veículo seja entregue a pessoa de Nome Delegado qual é responsável público pelos fatos.')
            }
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()
        } else {
            toastr["warning"]("Esqueceu de colocar os artigos", "Opa...")
        }

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarMedida()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#cidadePessoa").val().length != 0 && $('#rgAutor').val().length != 0 && $('#nomeAutor').val().length != 0 && $('#cidadeAutor').val().length != 0 && $('#nTco').val().length != 0 && $("#respPrisao").val() != "") 
    {
        var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        $("#p1").append(`Vem a declarar que <b>${$('#nomePessoa').val().toUpperCase()}</b>, inscrito no R.G sob nº <b>${$('#rgPessoa').val().toUpperCase()}</b>, residente e domiciliado na cidade de <b>${$('#cidadePessoa').val().toUpperCase()}</b>, vem à presença de Vossa Senhoria, por meio do seu ocorrido infra assinado, ajuizar a.`)
        $("#p2").append(`em face de <b>${$('#nomeAutor').val().toUpperCase()}</b>, inscrito no R.G sob nº <b>${$('#rgAutor').val().toUpperCase()}</b> residente e domiciliado na Cidade de <b>${$('#cidadeAutor').val().toUpperCase()}</b>, pelos motivos e fatos que passa a expor no Termo Circunstaciado de Ocorrência de Nº <b>${$('#nTco').val().toUpperCase()}</b>/2021.`)
        $("#dataAtual").append('Evolution America, '+str_data)
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarMandado()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#nOficio").val().length != 0 && $('#tipoMandado').val() != "" && $("#respPrisao").val() != "") 
    {
        if ($("#codigoPenal input:checkbox:checked").length != 0) {
            var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                codigosP += $(element).parent().find(".form-check-input").val().trim()+", ";
                console.log(codigosP);
            });
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            $("#dataAtual").append('Evolution America/EUA, '+str_data)
            $("#oficioN").append(`Ofício Nº <b>${$("#nOficio").val().toUpperCase()}</b>/2021 - DFBI/EUA.`)
            $('#nomeResp').append($('#respPrisao').val())
            if($('#tipoMandado').val() == 'Prisão'){
                $('#tipMandado').append('MANDADO DE PRISÃO')
                $('#ref').append(`Referência: <b>Pedido de Prisão Nº${$("#nOficio").val().toUpperCase()}/2021 - DFBI/EUA.</b>`)
                $("#p1").append(`Cumprimentando-o, encaminho a Vossa Senhoria esse documento de prisão, em razão do cumprimento de mandado judicial de prisão de <b>${$('#nomePessoa').val().toUpperCase()}</b>, RG: <b>${$('#rgPessoa').val().toUpperCase()}</b> atuado no(s) Artigo(s): <b>${codigosP}</b>e aos demais demasiados em flagrante.`)
                $("#p2").append(`MANDA a autoridade Policial, a quem esteja com autoridade para portar esse documento, indo por ele devidamente assinado que em cumprimento, dirija-se a DP da cidade, e aí sendo, <b>REALIZE A PRISÃO</b> do mesmo.`)
                $('p4').append('')
            }
            else if($('#tipoMandado').val() == 'Busca e Apreensão'){
                $('#tipMandado').append('MANDADO DE BUSCA E APREENSÃO')
                $('#ref').append(`Referência: <b>Pedido de Busca e Apreensão de bens como motos, carros e casas, Pedido de Prisão Nº${$("#nOficio").val().toUpperCase()}/2021 - DFBI/EUA.</b>`)
                $("#p1").append(`Cumprimentando-o, encaminho a Vossa Senhoria esse documento de busca e apreensão, em razão do cumprimento de mandado judicial de busca e apreensão e prisão de <b>${$('#nomePessoa').val().toUpperCase()}</b>, RG: <b>${$('#rgPessoa').val().toUpperCase()}</b> atuado no(s) Artigo(s): <b>${codigosP}</b>os demais artigos serão ajustados no que for pego nos bens do mesmo..`)
                $("#p2").append(`MANDA a autoridade Policial, a quem esteja com autoridade para portar esse documento, indo por ele devidamente assinado que em cumprimento, dirija-se a DP da cidade, e aí sendo, <b>REALIZE BUSCA E APREENSÃO</b> nos Veículos e Propriedades do mesmo.`)
                $('p4').append('<b>DETERMINO</b> que após a apreensão, o veículo seja levado para a delegacia local com um delegado do FBI, lavrado o termo de apreensão, que a requerente seja notificado e que o veículo seja entregue a pessoa de Nome Delegado qual é responsável público pelos fatos.')
            }
            else if($('#tipoMandado').val() == 'Revisão de Bens'){
                $('#tipMandado').append('MANDADO DE REVISÃO DE BENS')
                $('#ref').append(`Referência: <b>Pedido de Revisão de bens como motos, carros e casas, Processo Nº${$("#nOficio").val().toUpperCase()}/2021 - DFBI/EUA.</b>`)
                $("#p1").append(`Cumprimentando-o, encaminho a Vossa Senhoria esse documento de revisão de bens, em razão do cumprimento do processo jurídico contra o réu <b>${$('#nomePessoa').val().toUpperCase()}</b>, RG: <b>${$('#rgPessoa').val().toUpperCase()}</b>.`)
                $("#p2").append(`MANDA a autoridade Policial, a quem esteja com autoridade em posse desse documento, indo por ele devidamente assinado que em cumprimento, dirija-se a 2ª Departamento Judiciário da Capital - COMARCA DE LAS VENTURAS, e aí sendo, <b>REALIZE A REVISÃO DE SEUS DEVIDOS BENS</b>, tais como veículos e propriedades do réu.`)
                $('p4').append('<b>DETERMINO</b> que após a constatação de seus bens, o réu seja levado para a delegacia local com um delegado do FBI, lavrado o termo de revisão, que o(a) requerente seja notificado(a) e que o veículo seja entregue a pessoa que se encontra responsável por esse presente documento, o qual é responsável público pelos fatos.')
            }
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()
        } else {
            toastr["warning"]("Esqueceu de colocar os artigos", "Opa...")
        }

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarInformativo()
{
    window.scrollTo(0, 0)
    if ($("#relatoPrisao").val().length != 0 && $("#respPrisao").val() != "") 
    {
        var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        $("#p1").text($('#relatoPrisao').val())
        $("#dataAtual").append('Evolution America, '+str_data)
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}